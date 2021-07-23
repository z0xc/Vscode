function hook1(){
        var soAddr = Module.findBaseAddress("libyoyo.so");
        console.log("soBaseAddress:",soAddr);
        // SET_RValue		
        var funAddr = Module.findExportByName("libyoyo.so", "_Z10SET_RValueP6RValueS0_i");
        // var funAddr = Module.findExportByName("libyoyo.so", "_Z10GET_RValueP6RValueS0_i");
        // var globalAddr = Module.findExportByName("libyoyo.so", "_Z22Variable_Global_SetVariiP6RValue");
        console.log("_Z10SET_RValueP6RValueS0_i Addr:",funAddr);
        if(funAddr != null){
                Interceptor.attach(funAddr, {
                        onEnter: function(args){
                                var flag = Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n';
                                // console.log(flag);
                                var s = "libyoyo.so!_Z22Variable_Global_SetVariiP6RValue+0x50\\n0x1100\\n";
                                if(flag.indexOf(s)> -1){
                                // if(args[0] == 0xbe513820){
                                        // console.log(flag);
                                        // console.log(s);
                                        // console.log(flag.indexOf(s));
                                        var a1 = ptr(args[0]).readDouble();
                                        var a2 = ptr(args[1]).readDouble();
                                        // console.log(typeof a1);
                                        a1 = parseInt(a1);
                                        a2 = parseInt(a2);
                                        // console.log(typeof a1);
                                        // console.log("a2:",a2);   //0xc1adf2ac
                                        // var temp = ptr(a2);
                                        // console.warn(hexdump(temp));
                                        // var a = ptr(0xc1adf2b8);
                                        // console.log("*a:",a.readPointer());
                                        // console.warn(hexdump(a));
                                        // console.error("_Z10SET_RValueP6RValueS0_i");

                                        // console.error("====================================================================------------------------------------");
                                        // console.error(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
                                        // console.error(JSON.stringify(this.context));
                                        if(a1 > 0 && a1 < 100 && a1 > a2  && a2!=0){
                                                console.log("a1: ",a1);
                                                console.log("a2: ",a2);

                                                console.error("args0:",args[0]);
                                                var p1 = ptr(args[0]);
                                                console.error("args0 值:",p1.readDouble());

                                                console.error("args1:",args[1]);
                                                var p2 = ptr(args[1]);
                                                console.error("args1: 值",p2.readDouble());
                                                
                                                console.error("args2:",args[2]);
                                                p2.writeDouble(p1.readDouble());  //锁血
                                                console.error(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
                                        }

                                        // console.log(args[3].toInt32());
                                        // console.log(args[4].toInt32());

                                }
                        
                        },
                        onLeave: function(retval){
                                // if(retval == 0xbd43d8a0 ){
                                //         console.log("retval:",retval);
                                //         var p4 = ptr(retval);
                                //         console.log("retval 值",p4.readDouble());
                                // }
                        }
                });
        }
}


function hook2(){
        // var soAddr = Module.findBaseAddress("libyoyo.so");
        // console.log("BaseAddress:",soAddr);
        //Variable_Global_SetVar
        var funAddr = Module.findExportByName("libyoyo.so", "_Z22Variable_Global_SetVariiP6RValue");
        console.log("_Z22Variable_Global_SetVariiP6RValue Addr:",funAddr);
        if(funAddr != null){
                Interceptor.attach(funAddr, {
                        onEnter: function(args){
                                if(args[2] == 0xae67ea6c || args[2] == 0xae67ea6c){
                                        console.warn("_Z22Variable_Global_SetVariiP6RValue");
                                        console. log(" global args0:",args[0]);
                                        var p1 = ptr(args[0]);
                                        // console.log("args0 值",p1.readDouble());

                                    
                                        console.log("global args1:",args[1]);
                                        var p2 = ptr(args[1]);
                                        // console.log("args1 值",p2.readInt());

                                        console.log("global args2:",args[2]);
                                        var p3 = ptr(args[2]);
                                        console.log("args2 值:",p3.readDouble());
                                        console.log("====================================================================------------------------------------");
                                        console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
                                        console.warn(JSON.stringify(this.context));

                                        // console.log(args[3].toInt32());
                                        // console.log(args[4].toInt32());
                                }
                        
                        },
                        onLeave: function(retval){
                                // if(retval == 0xD3483B20 ){
                                //         console.log("retval:",retval);
                                //         var p4 = ptr(retval);
                                //         console.log("retval 值",p4.readDouble());
                                // }
                        }
                });
        }
}
function hook3(){
        // var soAddr = Module.findBaseAddress("libyoyo.so");
        // console.log("BaseAddress:",soAddr);
        var funAddr = Module.findExportByName("libyoyo.so", "_Z5DoPopjPhPKhP6VMExec");
        console.log("_Z5DoPopjPhPKhP6VMExec Addr:",funAddr);
        if(funAddr != null){
                Interceptor.attach(funAddr, {
                        onEnter: function(args){
                                if(args[0] == 0xc155f22c || args[1] == 0xc155f22c || args[2] == 0xc155f22c){
                                        console.warn("_Z5DoPopjPhPKhP6VMExec");
                                        console. log("DoPop args0",args[0]);
                                        var p1 = ptr(args[0]);
                                        // console.log("args0 值",p1.readDouble());

                                    
                                        console. log("DoPop args1",args[1]);
                                        // console.log("global args1",args[1]);
                                        // var p2 = ptr(args[1]);
                                        // console.log("args1 值",p2.readInt());

                                        console. log("DoPop args2",args[2]);
                                        // console.log("global args2",args[2]);
                                        // var p3 = ptr(args[2]);
                                        // console.log("args2 值",p3.readDouble());
                                        console. log("DoPop args3",args[3]);
                                        console.log("====================================================================------------------------------------");
                                        console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
                                        console.warn(JSON.stringify(this.context));

                                }
                        
                        },
                        onLeave: function(retval){
                                // if(retval == 0xD3483B20 ){
                                //         console.log("retval:",retval);
                                //         var p4 = ptr(retval);
                                //         console.log("retval 值",p4.readDouble());
                                // }
                        }
                });
        }
}
function hook4(){
        // var soAddr = Module.findBaseAddress("libyoyo.so");
        // console.log("BaseAddress:",soAddr);
        var funAddr = Module.findExportByName("libyoyo.so", "_ZN2VM11ExecReleaseER6VMExecP6RValue");
        console.log("_ZN2VM11ExecReleaseER6VMExecP6RValue Addr:",funAddr);
        if(funAddr != null){
                Interceptor.attach(funAddr, {
                        onEnter: function(args){
                                // if(args[0] == 0xD3483B20 || args[1] == 0xD3483B20 || args[2] == 0xa28fbdac){
                                        console.warn("_ZN2VM11ExecReleaseER6VMExecP6RValue");
                                        console. log("ExecRelease args0",args[0]);
                                        var p1 = ptr(args[0]);
                                        // console.log("args0 值",p1.readDouble());

                                    
                                        console. log("ExecRelease args1",args[1]);
                                        // console.log("global args1",args[1]);
                                        // var p2 = ptr(args[1]);
                                        // console.log("args1 值",p2.readInt());

                                        console. log("ExecRelease args2",args[2]);
                                        // console.log("global args2",args[2]);
                                        // var p3 = ptr(args[2]);
                                        // console.log("args2 值",p3.readDouble());
                                        console. log("ExecRelease args3",args[3]);
                                        console.log("====================================================================------------------------------------");
                                        console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
                                        console.warn(JSON.stringify(this.context));

                                // }
                        
                        },
                        onLeave: function(retval){
                                // if(retval == 0xD3483B20 ){
                                //         console.log("retval:",retval);
                                //         var p4 = ptr(retval);
                                //         console.log("retval 值",p4.readDouble());
                                // }
                        }
                });
        }
}
function hook5(){
        // var soAddr = Module.findBaseAddress("libyoyo.so");
        // console.log("BaseAddress:",soAddr);
        var funAddr = Module.findExportByName("libyoyo.so", "_ZN2VM4ExecEP5CCodeP12YYObjectBaseS3_P6RValueS3_iS5_iS3_");
        console.log("_ZN2VM4ExecEP5CCodeP12YYObjectBaseS3_P6RValueS3_iS5_iS3_ Addr:",funAddr);
        if(funAddr != null){
                Interceptor.attach(funAddr, {
                        onEnter: function(args){
                                // if(args[0] == 0xD3483B20 || args[1] == 0xD3483B20 || args[2] == 0xa28fbdac){
                                        console.warn("_ZN2VM4ExecEP5CCodeP12YYObjectBaseS3_P6RValueS3_iS5_iS3_");
                                        console. log("Exec args0",args[0]);
                                        var p0 = ptr(args[0]);
                                        console.log("args0 值",p0.readDouble());

                                    
                                        console. log("Exec args1",args[1]);
                                        var p1 = ptr(args[1]);
                                        console.log("args1 值",p1.readInt());

                                        console. log("Exec args2",args[2]);
                                        var p2 = ptr(args[2]);
                                        console.log("args2 值",p2.readDouble());

                                        console. log("Exec args3",args[3]);
                                        var p3 = ptr(args[3]);
                                        console.log("args2 值",p2.readDouble());

                                        var p4 = ptr(args[2]);
                                        console.log("args2 值",p2.readDouble());
                                        console. log("Exec args4",args[4]);
                                        console. log("Exec args5",args[5]);
                                        console. log("Exec args6",args[6]);
                                        console. log("Exec args7",args[7]);
                                        console. log("Exec args8",args[8]);
                                        console. log("Exec args9",args[9]);
                                        console.log("====================================================================------------------------------------");
                                        console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
                                        // console.warn(JSON.stringify(this.context));

                                // }
                        
                        },
                        onLeave: function(retval){
                                // if(retval == 0xD3483B20 ){
                                //         console.log("retval:",retval);
                                //         var p4 = ptr(retval);
                                //         console.log("retval 值",p4.readDouble());
                                // }
                        }
                });
        }
}
function hook6(){
        // var soAddr = Module.findBaseAddress("libyoyo.so");
        // console.log("BaseAddress:",soAddr);
        var funAddr = Module.findExportByName("libyoyo.so", "_Z9JS_StringR6RValueP12YYObjectBaseS2_iPS_");
        console.log("_Z9JS_StringR6RValueP12YYObjectBaseS2_iPS_ Addr:",funAddr);
        if(funAddr != null){
                Interceptor.attach(funAddr, {
                        onEnter: function(args){
                                // if(args[0] == 0xD3483B20 || args[1] == 0xD3483B20 || args[2] == 0xa28fbdac){
                                        console.warn("_Z9JS_StringR6RValueP12YYObjectBaseS2_iPS_");
                                        console. log("Exec args0",args[0]);
                                        var p0 = ptr(args[0]);
                                        console.log("args0 值",p0.readDouble());

                                    
                                        console. log("Exec args1",args[1]);
                                        // var p1 = ptr(args[1]);
                                        // console.log("args1 值",p1.readInt());

                                        console. log("Exec args2",args[2]);
                                        // var p2 = ptr(args[2]);
                                        // console.log("args2 值",p2.readDouble());

                                        console. log("Exec args3",args[3]);
                                        var p3 = ptr(args[3]);
                                        console.log("args2 值",p2.readInt());

                                        var p4 = ptr(args[4]);
                                        console.log("args2 值",p2.readDouble());
                                        console.log("====================================================================------------------------------------");
                                        console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
                                        // console.warn(JSON.stringify(this.context));

                                // }
                        
                        },
                        onLeave: function(retval){
                                // if(retval == 0xD3483B20 ){
                                //         console.log("retval:",retval);
                                //         var p4 = ptr(retval);
                                //         console.log("retval 值",p4.readDouble());
                                // }
                        }
                });
        }
}
function hook7(){
        // var soAddr = Module.findBaseAddress("libyoyo.so");
        // console.log("BaseAddress:",soAddr);
        var funAddr = Module.findExportByName("libyoyo.so", "_Z24JS_String_GetOwnPropertyP12YYObjectBaseP6RValuePKc");
        console.log("_Z24JS_String_GetOwnPropertyP12YYObjectBaseP6RValuePKc Addr:",funAddr);
        if(funAddr != null){
                Interceptor.attach(funAddr, {
                        onEnter: function(args){
                                // if(args[0] == 0xD3483B20 || args[1] == 0xD3483B20 || args[2] == 0xa28fbdac){
                                        console.warn("_Z24JS_String_GetOwnPropertyP12YYObjectBaseP6RValuePKc");
                                        console. log("Exec args0",args[0]);
                                        // var p0 = ptr(args[0]);
                                        // console.log("args0 值",p0.readDouble());

                                    
                                        console. log("Exec args1",args[1]);
                                        var p1 = ptr(args[1]);
                                        console.log("args1 值",p1.readDouble());

                                        console. log("Exec args2",args[2]);
                                        var p2 = ptr(args[2]);
                                        console.log("args2 值",p2.readCString());

                                        // console. log("Exec args3",args[3]);
                                        // var p3 = ptr(args[3]);
                                        // console.log("args2 值",p2.readInt());

                                        // var p4 = ptr(args[2]);
                                        // console.log("args2 值",p2.readDouble());
                                        console.log("====================================================================------------------------------------");
                                        console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
                                        // console.warn(JSON.stringify(this.context));

                                // }
                        
                        },
                        onLeave: function(retval){
                                // if(retval == 0xD3483B20 ){
                                //         console.log("retval:",retval);
                                //         var p4 = ptr(retval);
                                //         console.log("retval 值",p4.readDouble());
                                // }
                        }
                });
        }
}
function hook8(){
        // var soAddr = Module.findBaseAddress("libyoyo.so");
        // console.log("BaseAddress:",soAddr);
        var funAddr = Module.findExportByName("libyoyo.so", "_ZN12YYObjectBaseC2Eii");
        console.log("_ZN12YYObjectBaseC2Eii Addr:",funAddr);
        if(funAddr != null){
                Interceptor.attach(funAddr, {
                        onEnter: function(args){
                                // if(args[0] == 0xD3483B20 || args[1] == 0xD3483B20 || args[2] == 0xa28fbdac){
                                        console.warn("_ZN12YYObjectBaseC2Eii");
                                        console. log("Exec args0",args[0]);
                                        // var p0 = ptr(args[0]);
                                        // console.log("args0 值",p0.readDouble());

                                    
                                        console. log("Exec args1",args[1]);
                                        // var p1 = ptr(args[1]);
                                        // console.log("args1 值",p1.readInt());
                                        console.log("args1值:",args[1].toInt32());

                                        console. log("Exec args2",args[2]);
                                        // var p2 = ptr(args[2]);
                                        // console.log("args2 值",p2.readCString());
                                        console.log("args2值:",args[2].toInt32());

                                        // console. log("Exec args3",args[3]);
                                        // var p3 = ptr(args[3]);
                                        // console.log("args2 值",p2.readInt());

                                        // var p4 = ptr(args[2]);
                                        // console.log("args2 值",p2.readDouble());
                                        console.log("====================================================================------------------------------------");
                                        console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
                                        // console.warn(JSON.stringify(this.context));

                                // }
                        
                        },
                        onLeave: function(retval){
                                // if(retval == 0xD3483B20 ){
                                //         console.log("retval:",retval);
                                //         var p4 = ptr(retval);
                                //         console.log("retval 值",p4.readDouble());
                                // }
                        }
                });
        }
}
function hook9(){
        // var soAddr = Module.findBaseAddress("libyoyo.so");
        // console.log("BaseAddress:",soAddr);
        var funAddr = Module.findExportByName("libyoyo.so", "_ZN12YYObjectBaseD2Ev");
        console.log("_ZN12YYObjectBaseD2Ev Addr:",funAddr);
        if(funAddr != null){
                Interceptor.attach(funAddr, {
                        onEnter: function(args){
                                // if(args[0] == 0xD3483B20 || args[1] == 0xD3483B20 || args[2] == 0xa28fbdac){
                                        console.warn("_ZN12YYObjectBaseD2Ev");
                                        console. log("Exec args0",args[0]);
                                        // var p0 = ptr(args[0]);
                                        // console.log("args0 值",p0.readDouble());

                                    
                                        console. log("Exec args1",args[1]);
                                        // var p1 = ptr(args[1]);
                                        // console.log("args1 值",p1.readInt());
                                        console.log("args1值:",args[1].toInt32());

                                        console. log("Exec args2",args[2]);
                                        // var p2 = ptr(args[2]);
                                        // console.log("args2 值",p2.readCString());
                                        console.log("args2值:",args[2].toInt32());

                                        console. log("Exec args3",args[3]);
                                        var p3 = ptr(args[3]);
                                        console.log("args2 值",p3.readDouble());

                                        // var p4 = ptr(args[2]);
                                        // console.log("args2 值",p2.readDouble());
                                        console.log("====================================================================------------------------------------");
                                        console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
                                        // console.warn(JSON.stringify(this.context));

                                // }
                        
                        },
                        onLeave: function(retval){
                                // if(retval == 0xD3483B20 ){
                                //         console.log("retval:",retval);
                                //         var p4 = ptr(retval);
                                //         console.log("retval 值",p4.readDouble());
                                // }
                        }
                });
        }
}

//枚举导入导出表
function hook10(){
//     var imports = Module.enumerateImports("libyoyo.so");
//     for(var i = 0; i < imports.length; i++){
//         if(imports[i].name == "strncat"){
//             console.log(JSON.stringify(imports[i]));
//             console.log(imports[i].address);
//             break;
//         }
//     }
    
//     var exports = Module.enumerateExports("libyoyo.so");
//     for(var i = 0; i < exports.length; i++){
//         console.log(JSON.stringify(exports[i]));
//     }

    // var helloAddr = Module.findExportByName("libxiaojianbang.so", "Java_com_xiaojianbang_app_NativeHelper_helloFromC");
    // console.log(helloAddr);

//     var symbols = Module.enumerateSymbols("Health");
//     var symbols = Module.enumerateSymbols("Health",{

//     });
//     console.log(JSON.stringify(symbols));
        Java.perform(function() {

                // var module = Module.load('libyoyo.so');
                // console.log(typeof module);
                // console.log("module:",JSON.stringify(module));
                // var symbols = module.enumerateSymbols();
                // console.log(typeof symbols);
                // console.log("symbols:",JSON.stringify(symbols));
                // for(var i = 0;i<10;i++){
                //         // console.log("isGlobal:",symbols[i].isGlobal);
                //         // console.log("type:",symbols[i].type);
                //         // console.log("section:",JSON.stringify(symbols[i].section));
                //         console.log("name:",symbols[i].name);
                //         // console.log("address:",symbols[i].address);
                // } 
                // var soAddr = Module.findBaseAddress("libyoyo.so");

                // console.log(soAddr);
                // var bssAddr = soAddr.add(0x0053BA88);
                // console.log(bssAddr);
                // var realAddr = bssAddr.readPointer();
                // console.log(1);
                // console.log("symbols:",symbols);
                // var health = Module.findExportByName("libyoyo.so", "Health");
                var exports = Module.enumerateExports("libyoyo.so");

                console.log(typeof exports);
                // console.log("health:",JSON.stringify(exports));
        }
        );
}
function main(){
       	console.log("main--------begin");
	hook1();
        // hook2();
        // hook3();
        // hook4();
        // hook5();
        // hook6();
        // hook7();
        // hook8();
        // hook9();
        // hook10();

	console.log("main--------end");

}
setImmediate(main)