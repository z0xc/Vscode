function test(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN24KosovoInventoryContainer3AddERK10NameStringi";
        var fun_name = "KosovoInventoryContainer::Add(NameString const&, int)";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        console.log(so_name_str,' ',so_addr);
        console.log(fun_name_str,' ',fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log("======================================================================");
                                console.warn("test");
                                console.log(fun_name);
                                console.log("args[0]",args[0]);
                                // console.log("args[1]",args[1]);
                                // console.log(args[1].readPointer().readCString());
                                // console.log("args[2]",args[2]);
                                // console.log("args[1]",args[1].readCString());
                                // args[1] = ptr(0x3f800000);
                                // console.log("args[1]",args[1].toInt32());
                                // console.log("args[2]",args[2]);
                                // console.log("args[2]",args[2].toInt32());
                                // console.log("args[3]",args[3]);
                                // console.log("args[3]",args[3].toInt32());
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                                // console.log("retval:",retval.toInt32());
                                // retval.replace(0x10);
                                console.log("retval:",retval);
                                console.log("======================================================================");
                        }
                })
        }
}

function test2(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN24KosovoInventoryContainer23NotifyOnInventoryChangeEj";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        console.log(so_name_str,' ',so_addr);
        console.log(fun_name_str,' ',fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log("======================================================================");
                                console.warn("test2");
                                console.log(fun_name_str);
                                console.log("args[0]",args[0]);
                                // console.log("args[1]",args[1]);
                                // console.log(args[1].readPointer().readCString());
                                // console.log("args[2]",args[2]);
                                // console.log("args[1]",args[1].readCString());
                                // args[1] = ptr(0x3f800000);
                                // console.log("args[1]",args[1].toInt32());
                                // console.log("args[2]",args[2]);
                                // console.log("args[2]",args[2].toInt32());
                                // console.log("args[3]",args[3]);
                                // console.log("args[3]",args[3].toInt32());
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                                // console.log("retval:",retval.toInt32());
                                // retval.replace(0x10);
                                console.log("retval:",retval);
                                console.log("======================================================================");
                        }
                })
        }
}

function test3(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN22KosovoInventoryElement14AddNewElementsEi";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        console.log(so_name_str,' ',so_addr);
        console.log(fun_name_str,' ',fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log("======================================================================");
                                console.warn("test3");
                                console.log(fun_name_str);
                                console.log("args[0]",args[0]);
                                // console.log("args[1]",args[1]);
                                // console.log(args[1].readPointer().readCString());
                                // console.log("args[2]",args[2]);
                                // console.log("args[1]",args[1].readCString());
                                // args[1] = ptr(0x3f800000);
                                // console.log("args[1]",args[1].toInt32());
                                // console.log("args[2]",args[2]);
                                // console.log("args[2]",args[2].toInt32());
                                // console.log("args[3]",args[3]);
                                // console.log("args[3]",args[3].toInt32());
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                                // console.log("retval:",retval.toInt32());
                                // retval.replace(0x10);
                                console.log("retval:",retval);
                                console.log("======================================================================");
                        }
                })
        }
}

function test4(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN10NameStringC2ERKS_"; // NameString::NameString(NameString const&)
        var fun_name = "KosovoInventoryContainer::Add(NameString const&, int) ";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        console.log(so_name_str,' ',so_addr);
        console.log(fun_name_str,' ',fun_addr);
        var flag = false;
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                          if(args[1].readPointer().readCString() == "Wood"){
                                flag = true;
                                console.log("======================================================================");
                                console.warn("test4");
                                console.log(fun_name);
                                console.log("args[0]",args[0]);
                                console.log("args[1]",args[1]);
                                console.log(args[0].readPointer().readCString());
                                console.log(args[1].readPointer().readCString());
                                // console.log("args[2]",args[2]);
                                // console.log("args[1]",args[1].readCString());
                                // args[1] = ptr(0x3f800000);
                                // console.log("args[1]",args[1].toInt32());
                                // console.log("args[2]",args[2]);
                                // console.log("args[2]",args[2].toInt32());
                                // console.log("args[3]",args[3]);
                                // console.log("args[3]",args[3].toInt32());
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                          }
                        },
                        onLeave:function(retval){
                                if(flag == true){
                                        console.log("onLeave");
                                        // // console.log("retval:",retval.toInt32());
                                        // // retval.replace(0x10);
                                        console.log("retval:",retval);
                                        console.log("======================================================================");
                                        flag = false;
                                }                       
                        }
                })
        }
}
var charpp;
var charp;
function call_namestring(){
        var so_name_str = "libAndroidGame.so";
        var namestring_fun_str = "_ZN10NameStringC2EPKc";
        var namestring_fun_addr = Module.findExportByName(so_name_str,namestring_fun_str);
        // console.log("call_native_fun_addr:",call_native_fun_addr);
        var fun = new NativeFunction(namestring_fun_addr , 'void', ['pointer','pointer']);
        charpp = Memory.alloc(8);
        charp = Memory.allocUtf8String("Wood");
        fun(charpp,charp);
}
function test5(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN10NameStringC2EPKc";//NameString::NameString(char const*)
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        console.log(so_name_str,' ',so_addr);
        console.log(fun_name_str,' ',fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                if(args[1].readCString() == "Wood"){
                                        console.log("======================================================================");
                                        console.warn("test5");
                                        console.log(fun_name_str);
                                        console.log("args[0]",args[0]);
                                        console.log("args[1]",args[1]);
                                        console.log(args[0].readPointer().readCString());
                                        console.log(args[1].readCString());
                                        // console.log("args[2]",args[2]);
                                        // console.log("args[1]",args[1].readCString());
                                        // args[1] = ptr(0x3f800000);
                                        // console.log("args[1]",args[1].toInt32());
                                        // console.log("args[2]",args[2]);
                                        // console.log("args[2]",args[2].toInt32());
                                        // console.log("args[3]",args[3]);
                                        // console.log("args[3]",args[3].toInt32());
                                        // console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                                  }
                        },
                        onLeave:function(retval){
                                // console.log("onLeave");
                                // // console.log("retval:",retval.toInt32());
                                // // retval.replace(0x10);
                                // console.log("retval:",retval);
                                // console.log("======================================================================");
                        }
                })
        }
}

function test6(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN10NameString3SetERKS_"; //NameString::Set(char const*)
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        console.log(so_name_str,' ',so_addr);
        console.log(fun_name_str,' ',fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                if(args[1].readCString() == "Wood"){
                                        console.log("======================================================================");
                                        console.warn("test6");
                                        console.log(fun_name_str);
                                        console.log("args[0]",args[0]);
                                        // console.log("args[1]",args[1]);
                                        // console.log(args[1].readPointer().readCString());
                                        // console.log("args[2]",args[2]);
                                        // console.log("args[1]",args[1].readCString());
                                        // args[1] = ptr(0x3f800000);
                                        // console.log("args[1]",args[1].toInt32());
                                        // console.log("args[2]",args[2]);
                                        // console.log("args[2]",args[2].toInt32());
                                        // console.log("args[3]",args[3]);
                                        // console.log("args[3]",args[3].toInt32());
                                        // console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                                  }
                        },
                        onLeave:function(retval){
                                // console.log("onLeave");
                                // // console.log("retval:",retval.toInt32());
                                // // retval.replace(0x10);
                                // console.log("retval:",retval);
                                // console.log("======================================================================");
                        }
                })
        }
}

function test7(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN24KosovoInventoryContainer16FindElementIndexERK10NameStringb";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        console.log(so_name_str,' ',so_addr);
        console.log(fun_name_str,' ',fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log("======================================================================");
                                console.warn("test7");
                                console.log(fun_name_str);
                                console.log("args[0]",args[0]);
                                // console.log("args[1]",args[1]);
                                // console.log(args[1].readPointer().readCString());
                                // console.log("args[2]",args[2]);
                                // console.log("args[1]",args[1].readCString());
                                // args[1] = ptr(0x3f800000);
                                // console.log("args[1]",args[1].toInt32());
                                // console.log("args[2]",args[2]);
                                // console.log("args[2]",args[2].toInt32());
                                // console.log("args[3]",args[3]);
                                // console.log("args[3]",args[3].toInt32());
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                                // console.log("retval:",retval.toInt32());
                                // retval.replace(0x10);
                                console.log("retval:",retval);
                                console.log("======================================================================");
                        }
                })
        }
}

function test8(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN24KosovoInventoryContainer16FindElementIndexERK10NameStringb";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        console.log(so_name_str,' ',so_addr);
        console.log(fun_name_str,' ',fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log("======================================================================");
                                console.warn("test8");
                                console.log(fun_name_str);
                                console.log("args[0]",args[0]);
                                // console.log("args[1]",args[1]);
                                // console.log(args[1].readPointer().readCString());
                                // console.log("args[2]",args[2]);
                                // console.log("args[1]",args[1].readCString());
                                // args[1] = ptr(0x3f800000);
                                // console.log("args[1]",args[1].toInt32());
                                // console.log("args[2]",args[2]);
                                // console.log("args[2]",args[2].toInt32());
                                // console.log("args[3]",args[3]);
                                // console.log("args[3]",args[3].toInt32());
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                                // console.log("retval:",retval.toInt32());
                                // retval.replace(0x10);
                                console.log("retval:",retval);
                                console.log("======================================================================");
                        }
                })
        }
}

function test9(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN24KosovoInventoryContainer16FindElementIndexERK10NameStringb";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        console.log(so_name_str,' ',so_addr);
        console.log(fun_name_str,' ',fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log("======================================================================");
                                console.log(fun_name_str);
                                console.log("args[0]",args[0]);
                                // console.log("args[1]",args[1]);
                                // console.log(args[1].readPointer().readCString());
                                // console.log("args[2]",args[2]);
                                // console.log("args[1]",args[1].readCString());
                                // args[1] = ptr(0x3f800000);
                                // console.log("args[1]",args[1].toInt32());
                                // console.log("args[2]",args[2]);
                                // console.log("args[2]",args[2].toInt32());
                                // console.log("args[3]",args[3]);
                                // console.log("args[3]",args[3].toInt32());
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                                // console.log("retval:",retval.toInt32());
                                // retval.replace(0x10);
                                console.log("retval:",retval);
                                console.log("======================================================================");
                        }
                })
        }
}

function test10(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN24KosovoInventoryContainer16FindElementIndexERK10NameStringb";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        console.log(so_name_str,' ',so_addr);
        console.log(fun_name_str,' ',fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log("======================================================================");
                                console.log(fun_name_str);
                                console.log("args[0]",args[0]);
                                // console.log("args[1]",args[1]);
                                // console.log(args[1].readPointer().readCString());
                                // console.log("args[2]",args[2]);
                                // console.log("args[1]",args[1].readCString());
                                // args[1] = ptr(0x3f800000);
                                // console.log("args[1]",args[1].toInt32());
                                // console.log("args[2]",args[2]);
                                // console.log("args[2]",args[2].toInt32());
                                // console.log("args[3]",args[3]);
                                // console.log("args[3]",args[3].toInt32());
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                                // console.log("retval:",retval.toInt32());
                                // retval.replace(0x10);
                                console.log("retval:",retval);
                                console.log("======================================================================");
                        }
                })
        }
}

function main(){
        // test();
        // test2();
        // test3();
        test4();
        test5();
        test6();
        // test7();
        // test8();
        // test9();
        // test10();
}

setImmediate(main)