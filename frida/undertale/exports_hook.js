function hook1(){
        var soAddr = Module.findBaseAddress("libyoyo.so");
        console.log("BaseAddress:",soAddr);
        // GET_RValue		
        // var funAddr = Module.findExportByName("libyoyo.so", "_Z10GET_RValueP6RValueS0_i");
        var setvalAddr = Module.findExportByName("libyoyo.so", "_Z10SET_RValueP6RValueS0_i");
        // var globalAddr = Module.findExportByName("libyoyo.so", "_Z22Variable_Global_SetVariiP6RValue");
        console.log("setvalAddr:",setvalAddr);
        if(setvalAddr != null){
                Interceptor.attach(setvalAddr, {
                        onEnter: function(args){
                                if(args[0] == 0xD09B5EA0 || args[1] == 0xD09B5EA0){
                                        console.log("args0",args[0]);
                                        var p1 = ptr(args[0]);
                                        console.log("args0 值",p1.readDouble());

                                    
                                        console.log("args1",args[1]);
                                        var p2 = ptr(args[1]);
                                        console.log("args1 值",p2.readDouble());

                                        console.log("args2",args[2]);
                                        var p3 = ptr(args[2]);
                                        console.log("args2 值",p3.readInt());
                                        console.log("====================================================================------------------------------------");
                                        console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
                                        console.warn(JSON.stringify(this.context));
                                        // p2.writeDouble(p1.readDouble());  //锁血

                                        // console.log(args[3].toInt32());
                                        // console.log(args[4].toInt32());

                                }
                        
                        },
                        onLeave: function(retval){
                                // if(retval == 0xD09B5EA0 ){
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
        var funAddr = Module.findExportByName("libyoyo.so", "_Z22Variable_Global_SetVariiP6RValue");
        console.log("globalfunAddr:",funAddr);
        if(funAddr != null){
                Interceptor.attach(funAddr, {
                        onEnter: function(args){
                                // if(args[0] == 0xD09B5EA0 || args[1] == 0xD09B5EA0 || args[2] == 0xD09B5EA0){
                                        console. log(" global args0",args[0]);
                                        var p1 = ptr(args[0]);
                                        // console.log("args0 值",p1.readDouble());

                                    
                                        console.log("global args1",args[1]);
                                        var p2 = ptr(args[1]);
                                        // console.log("args1 值",p2.readInt());

                                        console.log("global args2",args[2]);
                                        var p3 = ptr(args[2]);
                                        console.log("args2 值",p3.readDouble());
                                        console.log("====================================================================------------------------------------");
                                        console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
                                        console.warn(JSON.stringify(this.context));
                                        // p2.writeDouble(p1.readDouble());  //锁血

                                        // console.log(args[3].toInt32());
                                        // console.log(args[4].toInt32());
                                // }
                        
                        },
                        onLeave: function(retval){
                                // if(retval == 0xD09B5EA0 ){
                                //         console.log("retval:",retval);
                                //         var p4 = ptr(retval);
                                //         console.log("retval 值",p4.readDouble());
                                // }
                        }
                });
        }
}

function main(){
       	console.log("main-------begin");
	hook1();
        // hook2();
	console.log("main------end");

}
setImmediate(main)