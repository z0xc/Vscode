
function hexToBytes(str) {
    var pos = 0;
    var len = str.length;
    if (len % 2 != 0) {
        return null;
    }
    len /= 2;
    var hexA = new Array();
    for (var i = 0; i < len; i++) {
        var s = str.substr(pos, 2);
        var v = parseInt(s, 16);
        hexA.push(v);
        pos += 2;
    }
    return hexA;
}

function stringToBytes(str) {  
    var ch, st, re = []; 
    for (var i = 0; i < str.length; i++ ) { 
        ch = str.charCodeAt(i);  
        st = [];                 
        do {  
            st.push( ch & 0xFF );  
            ch = ch >> 8;          
        }    
        while ( ch );  
        re = re.concat( st.reverse() ); 
    }  
    return re;  
}
//枚举导入导出表
function hookTest1(){

    var imports = Module.enumerateImports("libxiaojianbang.so");
    for(var i = 0; i < imports.length; i++){
        if(imports[i].name == "strncat"){
            console.log(JSON.stringify(imports[i]));
            console.log(imports[i].address);
            break;
        }
    }
    
    var exports = Module.enumerateExports("libxiaojianbang.so");
    for(var i = 0; i < exports.length; i++){
        console.log(JSON.stringify(exports[i]));
    }

    // var helloAddr = Module.findExportByName("libxiaojianbang.so", "Java_com_xiaojianbang_app_NativeHelper_helloFromC");
    // console.log(helloAddr);

}
//Hook导出函数
function hookTest2(){
    var helloAddr = Module.findExportByName("libxiaojianbang.so", "Java_com_xiaojianbang_app_NativeHelper_add");
    console.log(helloAddr);
    if(helloAddr != null){
        Interceptor.attach(helloAddr,{
            onEnter: function(args){
                //console.log(args[0]);
                //console.log(args[1]);
                console.log(args[2]);
                //console.log(this.context.x2);
                //console.log(args[3]);
                //console.log(args[4].toInt32());
            },
            onLeave: function(retval){
                //console.log(retval);
                //console.log("retval", retval.toInt32());
            }
        });
    }
}
//修改函数参数和返回值
function hookTest3(){
    var helloAddr = Module.findExportByName("libxiaojianbang.so", "Java_com_xiaojianbang_app_NativeHelper_add");
    console.log(helloAddr);
    if(helloAddr != null){
        Interceptor.attach(helloAddr,{
            onEnter: function(args){
                //修改函数参数的时候，如果参数是字符串 没法修改
                args[2] = ptr(1000); //new NativePointer()
                console.log(args[2].toInt32());
                console.log(args[3]);
                console.log(args[4]);
            },
            onLeave: function(retval){
                retval.replace(20000);
                console.log("retval", retval.toInt32());
            }
        });
    }
}
//Hook未导出函数
function hookTest4(){
    var soAddr = Module.findBaseAddress("libxiaojianbang.so");
    console.log(soAddr);
    var funcAddr = soAddr.add(0x23F4); //函数地址计算 thumb+1 ARM不加
    console.log(funcAddr);

    if(funcAddr != null){
        Interceptor.attach(funcAddr,{
            onEnter: function(args){

            },
            onLeave: function(retval){
                console.log(hexdump(retval));
            }
        });
     }
}
//获取指针参数返回值
function hookTest5(){
    var soAddr = Module.findBaseAddress("libxiaojianbang.so");
    console.log(soAddr);
    var sub_208C = soAddr.add(0x208C); //函数地址计算 thumb+1 ARM不加
    console.log(sub_208C);
    if(sub_208C != null){
        Interceptor.attach(sub_208C,{
            onEnter: function(args){
                this.args1 = args[1];
            },
            onLeave: function(retval){
                //修改内存数据
                ptr(this.args1).writeByteArray(hexToBytes("0123456789abcdef0123456789abcdef"));
                console.log(hexdump(this.args1));
            }
        });
    }
}
//内存读写
function hookTest7(){
    var soAddr = Module.findBaseAddress("libxiaojianbang.so");
    console.log(soAddr);
    if(soAddr != null){
        //读取指定地址的字符串 dump指定内存
        //console.log(soAddr.add(0x2C00).readCString());
        //console.log(hexdump(soAddr.add(0x2C00)));

        //读内存
        //var strByte = soAddr.add(0x2C00).readByteArray(16); 
        //console.log(strByte);

        //写内存
        //soAddr.add(0x2C00).writeByteArray(stringToBytes("xiaojianbang")); 
        //读取指定地址的字符串 dump指定内存
        //console.log(hexdump(soAddr.add(0x2C00)));  

        //var bytes = Memory.readByteArray(soAddr.add(0x2C00), 16); //原先API
        //console.log(bytes);

    }
}
//Hook dlopen
function hookTest6(){
    var dlopen = Module.findExportByName(null, "dlopen");
    console.log(dlopen);
    if(dlopen != null){
        Interceptor.attach(dlopen,{
            onEnter: function(args){
                var soName = args[0].readCString();
                console.log(soName);
                if(soName.indexOf("libxiaojianbang.so") != -1){
                    this.hook = true;
                }
            },
            onLeave: function(retval){
                if(this.hook) { hookTest5() };
            }
        });
    }

    var android_dlopen_ext = Module.findExportByName(null, "android_dlopen_ext");
    console.log(android_dlopen_ext);
    if(android_dlopen_ext != null){
        Interceptor.attach(android_dlopen_ext,{
            onEnter: function(args){
                var soName = args[0].readCString();
                console.log(soName);
                if(soName.indexOf("libxiaojianbang.so") != -1){
                    this.hook = true;
                }
            },
            onLeave: function(retval){
                if(this.hook) { hookTest5() };
            }
        });
    }

}
//主动调用JNI函数
function hookTest8(){
    var funcAddr = Module.findExportByName("libxiaojianbang.so", "Java_com_xiaojianbang_app_NativeHelper_helloFromC");
    console.log(funcAddr);
    if(funcAddr != null){
        Interceptor.attach(funcAddr,{
            onEnter: function(args){

            },
            onLeave: function(retval){
                var env = Java.vm.tryGetEnv();
                var jstr = env.newStringUtf("bbs.125.la");  //主动调用jni函数 cstr转jstr
                retval.replace(jstr);

                var cstr = env.getStringUtfChars(jstr); //主动调用 jstr转cstr
                console.log(cstr.readCString());
                console.log(hexdump(cstr));
            }
        });
    }
}
//Hook jni函数 计算地址方式
function hookTest9(){
    Java.perform(function(){
        console.log("Process.arch: ", Process.arch);
        console.log(JSON.stringify(Java.vm.tryGetEnv()));
        //(*(*a1 + 1336LL))(a1, a2);
        //*a1
        var envAddr = ptr(Java.vm.tryGetEnv().handle).readPointer();
        //*(*a1 + 1336LL)
        var newStringUtfAddr = envAddr.add(0x538).readPointer();
        console.log("newStringUtfAddr", newStringUtfAddr);
        if(newStringUtfAddr != null){
            Interceptor.attach(newStringUtfAddr,{
                onEnter: function(args){
                    console.log(args[1].readCString());
                },
                onLeave: function(retval){

                }
            });
        }
    });
}
//Hook libart 来Hook jni相关函数
function hookTest10(){
    var artSym = Module.enumerateSymbols("libart.so");
    var NewStringUTFAddr = null;
    for(var i = 0; i < artSym.length; i++){
        if(artSym[i].name.indexOf("CheckJNI") == -1 && artSym[i].name.indexOf("NewStringUTF") != -1){
            console.log(JSON.stringify(artSym[i]));
            NewStringUTFAddr = artSym[i].address;
        }
    };

    if(NewStringUTFAddr != null){
        Interceptor.attach(NewStringUTFAddr,{
            onEnter: function(args){
                console.log(args[1].readCString());
            },
            onLeave: function(retval){

            }
        });
    }
}
//so层主动调用任意函数
function hookTest11(){
    Java.perform(function(){
        //拿到函数地址
        var funcAddr = Module.findBaseAddress("libxiaojianbang.so").add(0x23F4);
        //声明函数指针
        var func = new NativeFunction(funcAddr, "pointer", ['pointer', 'pointer']);
        var env = Java.vm.tryGetEnv();
        console.log("env: ", JSON.stringify(env));
        if(env != null){
            var jstr = env.newStringUtf("xiaojianbang is very good!!!");
            var cstr = func(env, jstr);
            console.log(cstr.readCString());
            console.log(hexdump(cstr));
        }
    });
}
//frida API 写文件
function hookTest12(){
    var ios = new File("/sdcard/xiaojianbang.txt", "w");
    ios.write("xiaojianbang is very good!!!\n");
    ios.flush();
    ios.close();
}
//Hook libc 写文件
function hookTest13() {

    var addr_fopen = Module.findExportByName("libc.so", "fopen");
    var addr_fputs = Module.findExportByName("libc.so", "fputs");
    var addr_fclose = Module.findExportByName("libc.so", "fclose");

    console.log("addr_fopen:", addr_fopen, "addr_fputs:", addr_fputs, "addr_fclose:", addr_fclose);
    var fopen = new NativeFunction(addr_fopen, "pointer", ["pointer", "pointer"]);
    var fputs = new NativeFunction(addr_fputs, "int", ["pointer", "pointer"]);
    var fclose = new NativeFunction(addr_fclose, "int", ["pointer"]);

    var filename = Memory.allocUtf8String("/sdcard/xiaojianbang.txt");
    var open_mode = Memory.allocUtf8String("w");
    var file = fopen(filename, open_mode);
    console.log("fopen:", file);

    var buffer = Memory.allocUtf8String("bbs.125.la\n");
    var retval = fputs(buffer, file);
    console.log("fputs:", retval);

    fclose(file);

}
//inline Hook与寄存器Hook
function hookTest14(){
    var soAddr = Module.findBaseAddress("libxiaojianbang.so");
    console.log(soAddr);
    var sub_2894 = soAddr.add(0x2894); //函数地址计算 thumb+1 ARM不加
    console.log(sub_2894);
    if(sub_2894 != null){
        Interceptor.attach(sub_2894,{
            onEnter: function(){
                console.log(this.context.x0.toInt32());
                this.context.x0 = 0x1000;
                console.log(this.context.x0.toInt32());
            },
            onLeave: function(){

            }
        });
    }

    var sub_2858 = soAddr.add(0x2858); //函数地址计算 thumb+1 ARM不加
    console.log(sub_2858);
    if(sub_2858 != null){
        Interceptor.attach(sub_2858,{
            onEnter: function(){
                console.log(this.context.x1);
                this.context.x1 = soAddr.add(0x2C35);
                console.log(this.context.x1);
            },
            onLeave: function(){

            }
        });
    }
}

function main(){
    //hookTest1();
    //hookTest2();
    //hookTest3();
    //hookTest4();
    hookTest6();
}

setImmediate(main);