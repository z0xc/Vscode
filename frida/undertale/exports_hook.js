function hook1(){
        var soAddr = Module.findBaseAddress("libyoyo.so");
        console.log("soBaseAddress:",soAddr);
        // SET_RValue		
        // var funAddr = Module.findExportByName("libyoyo.so", "_Z10GET_RValueP6RValueS0_i");
        var setvalAddr = Module.findExportByName("libyoyo.so", "_Z10SET_RValueP6RValueS0_i");
        // var globalAddr = Module.findExportByName("libyoyo.so", "_Z22Variable_Global_SetVariiP6RValue");
        console.log("_Z10SET_RValueP6RValueS0_i Addr:",setvalAddr);
        if(setvalAddr != null){
                Interceptor.attach(setvalAddr, {
                        onEnter: function(args){
                                if(args[0] == 0xBEC83520){
                                        console.error("_Z10SET_RValueP6RValueS0_i");
                                        console.error("args0:",args[0]);
                                        var p1 = ptr(args[0]);
                                        console.error("args0 值:",p1.readDouble());

                                    
                                        console.error("args1:",args[1]);
                                        var p2 = ptr(args[1]);
                                        console.error("args1: 值",p2.readDouble());

                                        console.error("args2:",args[2]);
                                        // var p3 = ptr(args[2]);
                                        // console.log("args2 值",p3.readDouble());
                                        console.error("====================================================================------------------------------------");
                                        console.error(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
                                        console.error(JSON.stringify(this.context));
                                        // p2.writeDouble(p1.readDouble());  //锁血

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


function hook2(){
        // var soAddr = Module.findBaseAddress("libyoyo.so");
        // console.log("BaseAddress:",soAddr);
        //Variable_Global_SetVar
        var funAddr = Module.findExportByName("libyoyo.so", "_Z22Variable_Global_SetVariiP6RValue");
        console.log("_Z22Variable_Global_SetVariiP6RValue Addr:",funAddr);
        if(funAddr != null){
                Interceptor.attach(funAddr, {
                        onEnter: function(args){
                                if(args[2] == 0xBF76BAA0 || args[2] == 0xc36fb9ac){
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
                                // if(args[0] == 0xD3483B20 || args[1] == 0xD3483B20 || args[2] == 0xa28fbdac){
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
function main(){
       	console.log("main--------begin");
	hook1();
        // hook2();
        // hook3();
        hook4();
	console.log("main--------end");

}
setImmediate(main)