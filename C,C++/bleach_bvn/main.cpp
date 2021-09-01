#include <string.h>
#include <jni.h>
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <map>
#include <vector>
#include <queue>
#include <mutex>

#include <sys/socket.h>
#include <sys/stat.h>
#include <sys/un.h>
#include <netinet/in.h>
#include <netinet/tcp.h>
#include <netdb.h>
#include <arpa/inet.h>
#include <errno.h>
#include <unistd.h>

using namespace std;

#include "common.h"

pid_t _curPid = 0;

bool g_findAddrBase = false;
bool g_on_shared_so_load_Sucess = false;

class AddrBlock 
{
publi:
	AddrBlock(void* start, void* end)
	{
		_startAddr = start;
		_endAddr = end;
	}
	void* _startAddr = nullptr;
	void* _endAddr = nullptr;
};

class CheatCache
{
public:
	CheatCache(int index, int open)
	{
		_index = index;
		_open = open;
	}
	int _index = 0;
	int _open = 0;
};

vector<AddrBlock> _addrBlock;
array<void*, 6> _addrBase = {nullptr, nullptr, nullptr, nullptr, nullptr, nullptr}; 
queue<CheatCache> _cheatCache;
mutex _cheatCacheMutex;

#include <stdarg.h>
void dumpMem(long data)
{
	FILE* log_file = fopen("/data/local/tmp/memRegion", "a+");
	if (log_file != NULL) 
	{
		fwrite(&data, 1, 4, log_file);
		fflush(log_file);
		fclose(log_file);
	}
}

//------------------signal handler for SIGSEGV
#define XH_ERRNO_UNKNOWN 1001
#include <setjmp.h>
#include <errno.h>
static int              xh_core_sigsegv_enable = 1; //enable by default
static struct sigaction xh_core_sigsegv_act_old;
static volatile int     xh_core_sigsegv_flag = 0;//ͨ���ж� flag ��ֵ�����жϵ�ǰ�߳��߼��Ƿ���Σ��������
static sigjmp_buf       xh_core_sigsegv_env;
static void xh_core_sigsegv_handler(int sig)
{
    (void)sig;
    
    if(xh_core_sigsegv_flag)
        siglongjmp(xh_core_sigsegv_env, 1);
    else
        sigaction(SIGSEGV, &xh_core_sigsegv_act_old, NULL);
}
static int xh_core_add_sigsegv_handler()
{
    struct sigaction act;

    if(!xh_core_sigsegv_enable) return 0;
    
    if(0 != sigemptyset(&act.sa_mask)) return (0 == errno ? XH_ERRNO_UNKNOWN : errno);
    act.sa_handler = xh_core_sigsegv_handler;
    
    if(0 != sigaction(SIGSEGV, &act, &xh_core_sigsegv_act_old))
        return (0 == errno ? XH_ERRNO_UNKNOWN : errno);

    return 0;
}
static void xh_core_del_sigsegv_handler()
{
    if(!xh_core_sigsegv_enable) return;
    
    sigaction(SIGSEGV, &xh_core_sigsegv_act_old, NULL);
}

/*
bool init_ok = false;

//register signal handler
if(0 == xh_core_add_sigsegv_handler()) 
	init_ok = true;

//unregister the sig handler
if (init_ok == true)
	xh_core_del_sigsegv_handler();
*/

static void test()
{
    if(!xh_core_sigsegv_enable)
    {
        //do something;
    }
    else
    {    
        xh_core_sigsegv_flag = 1;
        if(0 == sigsetjmp(xh_core_sigsegv_env, 1))
        {
            //do something;
        }
        else
        {
            LOGE("catch SIGSEGV when read or write mem\n");
        }
        xh_core_sigsegv_flag = 0;
    }
}
//--------------------------------------end

#include "timestamp.hpp"
CTimestamp _timeStampHook;
static pthread_t addr_thread;
static pthread_t hook_thread;

#include <stdlib.h>
#include <string.h>
#include <errno.h>

/*
 * Avoid frequent malloc()/free() calls
 * (determined by getline() test on Linux)
 */
#define BUF_MIN 120

ssize_t getline(char **lineptr, size_t *n, FILE *stream)
{
    char *lptr;
    size_t len = 0;

    /* check for invalid arguments */
    if (lineptr == NULL || n == NULL) {
        errno = EINVAL;
        return -1;
    }

    lptr = fgetln(stream, &len);
    if (lptr == NULL) {
        /* invalid stream */
        errno = EINVAL;
        return -1;
    }

    /*
     * getline() returns a null byte ('\0') terminated C string,
     * but fgetln() returns characters without '\0' termination
     */
    if (*lineptr == NULL) {
        *n = BUF_MIN;
        goto alloc_buf;
    }

    /* realloc the original pointer */
    if (*n < len + 1) {
        free(*lineptr);

        *n = len + 1;
alloc_buf:
        *lineptr = (char*)malloc(*n);
        if (*lineptr == NULL) {
            *n = 0;
            return -1;
        }
    }

    /* copy over the string */
    memcpy(*lineptr, lptr, len);
    (*lineptr)[len] = '\0';

    /*
     * getline() and fgetln() both return len including the
     * delimiter but without the null byte at the end
     */
    return len;
}
bool readmaps(pid_t target)
{
	//LOGE("begin readmaps.\n");
	size_t anonymnousMemSize = 0;
	_addrBlock.clear();
	
    FILE *maps;
    char name[128], *line = NULL;
    char exelink[128];
    size_t len = 0;
    unsigned int code_regions = 0, exe_regions = 0;
    unsigned long prev_end = 0, load_addr = 0, exe_load = 0;
    bool is_exe = false;

#define MAX_LINKBUF_SIZE 256
    char linkbuf[MAX_LINKBUF_SIZE], *exename = linkbuf;
    int linkbuf_size;
    char binname[MAX_LINKBUF_SIZE];

    /* check if target is valid */
    /*if (target == 0)
        return false;*/

    /* construct the maps filename */
    //snprintf(name, sizeof(name), "/proc/%u/maps", target);
	snprintf(name, sizeof(name), "/proc/self/maps");

    /* attempt to open the maps file */
    if ((maps = fopen(name, "r")) == NULL) 
	{
        LOGE("failed to open maps file %s.\n", name);
        return false;
    }

    //LOGE("maps file located at %s opened.\n", name);

    /* get executable name */
    //snprintf(exelink, sizeof(exelink), "/proc/%u/exe", target);
	snprintf(exelink, sizeof(exelink), "/proc/self/exe");
    linkbuf_size = readlink(exelink, exename, MAX_LINKBUF_SIZE - 1);
    if (linkbuf_size > 0)
    {
        exename[linkbuf_size] = 0;
    } else
	{
        /* readlink may fail for special processes, just treat as empty in
           order not to miss those regions */
        exename[0] = 0;
    }

    /* read every line of the maps file */
    while (getline(&line, &len, maps) != -1) 
	{
        unsigned long start, end;
        char read, write, exec, cow;
        int offset, dev_major, dev_minor, inode;

        /* slight overallocation */
        char filename[len];

        /* initialise to zero */
        memset(filename, '\0', len);

        /* parse each line */
        if (sscanf(line, "%lx-%lx %c%c%c%c %x %x:%x %u %[^\n]", &start, &end, &read,
                &write, &exec, &cow, &offset, &dev_major, &dev_minor, &inode, filename) >= 6) 
		{
			if (read == 'r' && write == 'w' && exec == '-' && cow == 'p' && strcmp(filename, "") == 0)
			{
				 //LOGE("---find %x ~ %x\n", start, end);
				 //anonymnousMemSize += end - start;
				 AddrBlock obj(reinterpret_cast<void*>(start), reinterpret_cast<void*>(end));
				 _addrBlock.push_back(obj);
			}
        }
			
    }

	vector<AddrBlock>::iterator itor = _addrBlock.begin();
	for (itor = _addrBlock.begin(); itor != _addrBlock.end(); itor++)
	{
		AddrBlock obj = *itor;
		//LOGE("---find %x ~ %x\n", obj._startAddr, obj._endAddr);
		anonymnousMemSize += reinterpret_cast<unsigned long >(obj._endAddr) - reinterpret_cast<unsigned long >(obj._startAddr);
	}
	 //LOGE("!!!anonymnousMemSize %x\n", anonymnousMemSize);
    /* release memory allocated */
    free(line);
    fclose(maps);

    return true;
}

void updateAddr()
{
	if (g_findAddrBase)
		return;
	
	readmaps(0);
	
	vector<AddrBlock>::iterator itor = _addrBlock.begin();
	for (itor = _addrBlock.begin(); itor != _addrBlock.end(); itor++)
	{
		AddrBlock obj = *itor;
		//LOGE("---block %x ~ %x\n", obj._startAddr, obj._endAddr);

		int nCount = 0;
		array<void*, 6> addrBase;
		int index;
		for (index = 0; reinterpret_cast<unsigned long >(obj._startAddr) + index + 0x1C < reinterpret_cast<unsigned long >(obj._endAddr); index++)
		{
			unsigned long addr1 		= reinterpret_cast<unsigned long>(obj._startAddr) + index;
			unsigned long addr2 		= reinterpret_cast<unsigned long>(obj._startAddr) + index + 0x4;
			unsigned long addr3 		= reinterpret_cast<unsigned long>(obj._startAddr) + index + 0x8;
			unsigned long addrBlood 	= reinterpret_cast<unsigned long>(obj._startAddr) + index + 0xC;
			unsigned long addrSp 		= reinterpret_cast<unsigned long>(obj._startAddr) + index + 0x10;
			unsigned long addrBlue 		= reinterpret_cast<unsigned long>(obj._startAddr) + index + 0x14;
			unsigned long addrAssist 	= reinterpret_cast<unsigned long>(obj._startAddr) + index + 0x18;
			unsigned long addr8 		= reinterpret_cast<unsigned long>(obj._startAddr) + index + 0x1C;
			if (10 == *(reinterpret_cast<unsigned int*>(addr1)) 		&&
				11 == *(reinterpret_cast<unsigned int*>(addr2)) 		&&
				12 == *(reinterpret_cast<unsigned int*>(addr3)) 		&&
				20 == *(reinterpret_cast<unsigned int*>(addrBlood)) 	&&
				21 == *(reinterpret_cast<unsigned int*>(addrSp)) 		&&
				22 == *(reinterpret_cast<unsigned int*>(addrBlue)) 		&&
				30 == *(reinterpret_cast<unsigned int*>(addrAssist)) 	&&
				40 == *(reinterpret_cast<unsigned int*>(addr8)))
			{
				//LOGE("---updateAddr() find: %x\n", obj._startAddr+ index);
				unsigned long addrTmp =  reinterpret_cast<unsigned long >(obj._startAddr) + index;
				addrBase[nCount] = reinterpret_cast<void*>(addrTmp);//obj._startAddr + index;
				nCount++;
			}
		}
		
		if (nCount == 1)
		{			
			_addrBase[0] = addrBase[0];
			LOGE("---updateAddr() update addr: %x\n", addrBase[0]);
			g_findAddrBase = true;
		}
		else
		{
			if (nCount)
				LOGE("---updateAddr() nCount %d\n", nCount);
		} 
	}
}

void updateAddr_safe()
{
	if(!xh_core_sigsegv_enable)
    {
        updateAddr();
    }
    else
    {    
        xh_core_sigsegv_flag = 1;
        if(0 == sigsetjmp(xh_core_sigsegv_env, 1))
        {
            updateAddr();
        }
        else
        {
            //LOGE("catch SIGSEGV when read or write mem\n");
        }
        xh_core_sigsegv_flag = 0;
    }
}

void process_cheat(int arg0, int arg1)
{
	if (0 == _curPid)
		return;

	if (nullptr == _addrBase[0])
	{
		lock_guard<mutex> lock(_cheatCacheMutex);
		CheatCache obj(arg0, arg1);
		_cheatCache.push(obj);
		return;
	}
	
	unsigned long addrTmp = 0;
	int value = 1;
	switch (arg0)
	{
	case 1://keep_blood
		addrTmp = reinterpret_cast<unsigned long >(_addrBase[0]) + 0xC;
		if (arg1 != 1)
			value = 20;
		break;
	case 2://keep_sp
		addrTmp = reinterpret_cast<unsigned long >(_addrBase[0]) + 0x10;
		if (arg1 != 1)
			value = 21;
		break;
	case 3://keep_blue
		addrTmp = reinterpret_cast<unsigned long >(_addrBase[0]) + 0x14;
		if (arg1 != 1)
			value = 22;
		break;		
	case 4://keep_assist
		addrTmp = reinterpret_cast<unsigned long >(_addrBase[0]) + 0x18;
		if (arg1 != 1)
			value = 23;
		break;		
	}
	unsigned int* addr = reinterpret_cast<unsigned int*>(addrTmp);
	*addr = value;
}

void* threadHookBlenchBvnProc(void* param)
{
	while(!g_findAddrBase)
	{
		_timeStampHook.update();
		
		updateAddr_safe();
		
		if (_timeStampHook.getElapsedSecond() < 0.25)
			usleep(250000); 
	}
	if (nullptr != _addrBase[0])
	{
		lock_guard<mutex> lock(_cheatCacheMutex);
		while (!_cheatCache.empty())
		{
			CheatCache tmp = _cheatCache.front();
			process_cheat(tmp._index, tmp._open);
			_cheatCache.pop();
		}
	}
	LOGE("exit hookBlenchBvn thread\n");
	return NULL;
}

#define EXPORT_FUNC __attribute__((visibility("default")))

extern "C"
{
	EXPORT_FUNC void setLibPath(std::string path)
	{
		
	}
	
	EXPORT_FUNC void on_shared_so_load(std::string soName, void* handle)
	{
		if (soName.find("com.jarworld.bleach.bvn") != string::npos && soName.find("libCore.so") != string::npos)
		{
			//_dll = handle;
			LOGE("on_shared_so_load set handle. bleach bvn\n");
			
			_curPid = find_pid_of("com.jarworld.bleach.bvn");
	
			if(0 == xh_core_add_sigsegv_handler()) 
			{
				LOGE("add sigsegv handler sucess.\n");
				//init_ok = true;
			}
			else
				LOGE("add sigsegv handler failure.\n");
			
			//create hook thread-----------------------------------------------
			LOGE("create bleach bvn hook thread.\n");
			pthread_attr_t attr2;
			pthread_attr_init(&attr2);
			pthread_attr_setdetachstate(&attr2, PTHREAD_CREATE_JOINABLE);
			pthread_create(&hook_thread, &attr2, threadHookBlenchBvnProc, NULL);
			
			g_on_shared_so_load_Sucess = true;
		}
	}
	
	EXPORT_FUNC void doCheat(int arg0, int arg1, int arg2)
	{
		if (!g_on_shared_so_load_Sucess)
		{
			LOGE("doCheat do nothing just return\n");
			return;
		}
		int cheatIndex = 0;
		cheatIndex = arg0;
		LOGE("cheat index %d\n", cheatIndex);
		process_cheat(arg0, arg1);
	}
}
