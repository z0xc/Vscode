function hook1(){
        var soAddr = Module.findBaseAddress("libyoyo.so");
        console.log("soBaseAddress:",soAddr);
        // SET_RValue		
        var funAddr = Module.findExportByName("libyoyo.so", "_Z15F_DrawHealthbarR6RValueP9CInstanceS2_iPS_");
        // var funAddr = Module.findExportByName("libyoyo.so", "_Z10GET_RValueP6RValueS0_i");
        // var globalAddr = Module.findExportByName("libyoyo.so", "_Z22Variable_Global_SetVariiP6RValue");
        console.log("_Z15F_DrawHealthbarR6RValueP9CInstanceS2_iPS_ Addr:",funAddr);
        if(funAddr != null){
                Interceptor.attach(funAddr, {
                        onEnter: function(args){
                                var flag = Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n';
                                // console.log(flag);
                                // var s = "libyoyo.so!_Z22Variable_Global_SetVariiP6RValue+0x50\\n0x1100\\n";
                                // if(flag.indexOf(s)> -1){
                                // if(args[0] == 0xbe513820){
                                        // console.log(flag);
                                        // console.log(s);
                                        // console.log(flag.indexOf(s));
                                        // var a1 = ptr(args[0]).readDouble();
                                        // var a2 = ptr(args[1]).readDouble();
                                        // // console.log(typeof a1);
                                        // a1 = parseInt(a1);
                                        // // a2 = parseInt(a2);
                                        // // console.log(typeof a1);
                                        // // console.log("a2:",a2);   //0xc1adf2ac
                                        // // var temp = ptr(a2);
                                        // // console.warn(hexdump(temp));
                                        // // var a = ptr(0xc1adf2b8);
                                        // // console.log("*a:",a.readPointer());
                                        // // console.warn(hexdump(a));
                                        // // console.error("_Z10SET_RValueP6RValueS0_i");

                                        // // console.error("====================================================================------------------------------------");
                                        // // console.error(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
                                        // // console.error(JSON.stringify(this.context));
                                        // // if(a1 > 0 && a1 < 100 && a1 > a2  && a2!=0){

                                        //         var Addr = Module.findExportByName("libyoyo.so", "g_pGlobal");
                                        //         console.log("global:",Addr);
                                        //         console.log("a1: ",a1);
                                        //         console.log("a2: ",a2);

                                        //         console.error("args0:",args[0]);
                                        //         var p1 = ptr(args[0]);
                                        //         console.error("args0 值:",p1.readDouble());

                                        //         console.error("args1:",args[1]);
                                        //         var p2 = ptr(args[1]);
                                        //         console.error("args1: 值",p2.readDouble());
                                                
                                        //         console.error("args2:",args[2]);
                                        //         p2.writeDouble(p1.readDouble());  //锁血
                                        //         // console.log(a);
                                        // // }

                                        // console.log(args[3].toInt32());
                                        // console.log(args[4].toInt32());

                                // }
                        
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
        var funAddr = Module.findExportByName("libyoyo.so", "_Z17GR_Draw_Healthbarfffffjjjjibb");
        console.log("_Z17GR_Draw_Healthbarfffffjjjjibb Addr:",funAddr);
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
function hook3(){
        // var soAddr = Module.findBaseAddress("libyoyo.so");
        // console.log("BaseAddress:",soAddr);
        var funAddr = Module.findExportByName("libyoyo.so", "_Z16F_ActionIfHealthR6RValueP9CInstanceS2_iPS_");
        console.log("_Z16F_ActionIfHealthR6RValueP9CInstanceS2_iPS_ Addr:",funAddr);
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
function hook4(){
        // var soAddr = Module.findBaseAddress("libyoyo.so");
        // console.log("BaseAddress:",soAddr);
        var funAddr = Module.findExportByName("libyoyo.so", "_Z18F_ActionDrawHealthR6RValueP9CInstanceS2_iPS_");
        console.log("_Z18F_ActionDrawHealthR6RValueP9CInstanceS2_iPS_ Addr:",funAddr);
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
function hook5(){
        // var soAddr = Module.findBaseAddress("libyoyo.so");
        // console.log("BaseAddress:",soAddr);
        var funAddr = Module.findExportByName("libyoyo.so", "_Z17F_ActionSetHealthR6RValueP9CInstanceS2_iPS_");
        console.log("_Z17F_ActionSetHealthR6RValueP9CInstanceS2_iPS_ Addr:",funAddr);
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
function hook6(){
        // var soAddr = Module.findBaseAddress("libyoyo.so");
        // console.log("BaseAddress:",soAddr);
        var funAddr = Module.findExportByName("libyoyo.so", "_Z9GV_HealthP9CInstanceiP6RValue");
        console.log("_Z9GV_HealthP9CInstanceiP6RValue Addr:",funAddr);
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
function hook7(){
        // var soAddr = Module.findBaseAddress("libyoyo.so");
        // console.log("BaseAddress:",soAddr);
        var funAddr = Module.findExportByName("libyoyo.so", "_Z13GV_ShowHealthP9CInstanceiP6RValue");
        console.log("_Z13GV_ShowHealthP9CInstanceiP6RValue Addr:",funAddr);
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
function hook8(){
        // var soAddr = Module.findBaseAddress("libyoyo.so");
        // console.log("BaseAddress:",soAddr);
        var funAddr = Module.findExportByName("libyoyo.so", "_Z16SV_CaptionHealthP9CInstanceiP6RValue");
        console.log("_Z16SV_CaptionHealthP9CInstanceiP6RValue Addr:",funAddr);
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
function hook9(){
        // var soAddr = Module.findBaseAddress("libyoyo.so");
        // console.log("BaseAddress:",soAddr);
        var funAddr = Module.findExportByName("libyoyo.so", "_Z16GV_CaptionHealthP9CInstanceiP6RValue");
        console.log("_Z16GV_CaptionHealthP9CInstanceiP6RValue Addr:",funAddr);
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
function hook10(){
        // var soAddr = Module.findBaseAddress("libyoyo.so");
        // console.log("BaseAddress:",soAddr);
        var funAddr = Module.findExportByName("libyoyo.so", "_Z13SV_ShowHealthP9CInstanceiP6RValue");
        console.log("_Z13SV_ShowHealthP9CInstanceiP6RValue Addr:",funAddr);
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
function hook11(){
        // var soAddr = Module.findBaseAddress("libyoyo.so");
        // console.log("BaseAddress:",soAddr);
        var funAddr = Module.findExportByName("libyoyo.so", "_Z9SV_HealthP9CInstanceiP6RValue");
        console.log("_Z9SV_HealthP9CInstanceiP6RValue Addr:",funAddr);
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
function hook12(){
        // var soAddr = Module.findBaseAddress("libyoyo.so");
        // console.log("BaseAddress:",soAddr);
        var Addr = Module.findExportByName("libyoyo.so", "Health");
        console.log("Health Addr:",Addr);
        var a = ptr(Addr);
        console.log(a.readDouble()); 
        var Addr1 = Module.findExportByName("libyoyo.so", "Health_ShowCaption");
        console.log("Health_ShowCaption Addr:",Addr1);
        var b = ptr(Addr1);
        console.log(b.readDouble()); 
        var Addr2 = Module.findExportByName("libyoyo.so", "Health_Caption");
        console.log("Health_Caption Addr:",Addr2);
        var c = ptr(Addr2);
        console.log(c.readDouble()); 
        var d = ptr("0xc621e1e0");
        console.log(d.readDouble()); 
        // if(funAddr != null){
        //         Interceptor.attach(funAddr, {
        //                 onEnter: function(args){
        //                         // if(args[0] == 0xD3483B20 || args[1] == 0xD3483B20 || args[2] == 0xa28fbdac){
        //                                 console.warn("_ZN12YYObjectBaseD2Ev");
        //                                 console. log("Exec args0",args[0]);
        //                                 // var p0 = ptr(args[0]);
        //                                 // console.log("args0 值",p0.readDouble());

                                    
        //                                 console. log("Exec args1",args[1]);
        //                                 // var p1 = ptr(args[1]);
        //                                 // console.log("args1 值",p1.readInt());
        //                                 console.log("args1值:",args[1].toInt32());

        //                                 console. log("Exec args2",args[2]);
        //                                 // var p2 = ptr(args[2]);
        //                                 // console.log("args2 值",p2.readCString());
        //                                 console.log("args2值:",args[2].toInt32());

        //                                 console. log("Exec args3",args[3]);
        //                                 var p3 = ptr(args[3]);
        //                                 console.log("args2 值",p3.readDouble());

        //                                 // var p4 = ptr(args[2]);
        //                                 // console.log("args2 值",p2.readDouble());
        //                                 console.log("====================================================================------------------------------------");
        //                                 console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
        //                                 // console.warn(JSON.stringify(this.context));

        //                         // }
                        
        //                 },
        //                 onLeave: function(retval){
        //                         // if(retval == 0xD3483B20 ){
        //                         //         console.log("retval:",retval);
        //                         //         var p4 = ptr(retval);
        //                         //         console.log("retval 值",p4.readDouble());
        //                         // }
        //                 }
        //         });
        // }
}
function main(){
        console.log("main--------begin");
        hook1();
        hook2();
        hook3();
        hook4();
        hook5();
        hook6();
        hook7();
        hook8();
        hook9();
        hook10();
        hook11();
        hook12();
        console.log("main--------end");
}
setImmediate(main)