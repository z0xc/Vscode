/* Filename:	out_date_and_time.c
 * Brife:	Output date and time to time.txt one by one second
 * Date:	2014.8.7 Thursday
 * Author:	One fish
 */
#include <time.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
 
 
 
//------------Maro------------------
#define EPOCH_YEAR	1900
#define EPOCH_MONTH	1
#define EPOCH_DAY	1
#define OUT_FILE	"time.txt"
 
 
 
//------------Function decalre-------
void get_localtime(unsigned long int file_num);
unsigned long int find_file_end(const char *file);
 
 
 
//----------Golbal varibles----------
FILE *fp = NULL;
 
 
 
 
int main(void)
{
	unsigned long int file_num = 0;
 
	file_num	= find_file_end(OUT_FILE);		
	printf("line number: %d\n", file_num);
	
	while( 1 ){
		get_localtime( file_num + 1 );
		sleep(1);
	}
	return 0;
}
 
 
 
 
/*@Brife:	Open file and find file end line number
 *@Arg:		file is the opened file
 *@Rel:		Return the file number
 */
unsigned long int find_file_end(const char *file)
{
	char buf[30];
	int file_num = 0;
 
	fp	= fopen(file, "a+");
	if(NULL != fp){
		
		//File is empty
		if( NULL == fgets(buf, 30, fp) )
			return 0;
		
		//Move fp to the start of the last line of the file
		fseek(fp, -strlen(buf), SEEK_END);
		fgets(buf, 30, fp);
	
		//Or line number bigger than long long int scope
		if(1 != sscanf(buf, "%d", &file_num) ){
			printf("*.txt format is not correct\n");
			return 0;
		}
 
		return file_num;
	}else{
		printf("Open %s failed\n", OUT_FILE);
	}
}
 
 
 
/*@Brife:	Get current date and output to time.txt
 * 		Should be called after find_file_end()
 *@Arg:		File_num, the line number should be printed
 */
void get_localtime(unsigned long int file_num)
{
 
	time_t *t = NULL;
	static unsigned long int num = 0;
	if(num <= file_num){
		num	= file_num;
	}
 
	t	= (time_t *)malloc(sizeof(time_t));
 
	if(NULL != t){
		struct tm *ptm = NULL;
		
		//Get the time as the number of seconds since the Epoch, 1970-01-01 00:00 + 0000(UTC)
		//Translate calendar time to broken-down time
		time(t);
		ptm	= localtime(t);
		
		if(NULL != fp){
			fprintf(fp, "%d %d-%d-%d\t", num, EPOCH_YEAR + ptm->tm_year, EPOCH_MONTH + ptm->tm_mon, EPOCH_MONTH + ptm->tm_mday);
			fprintf(fp, "%d:%d:%d\n", ptm->tm_hour, ptm->tm_min, ptm->tm_sec);
			fflush(fp);
			++num;
		}else{
			printf("%s Not found\n", OUT_FILE);
		}
	}
	free(t);
}