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
                                                // console.log(a);
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

function main(){
        console.log("main--------begin");
        hook1();
        console.log("main--------end");
}
setImmediate(main)