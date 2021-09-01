function hook1(){
        var so_name = "libAndroidGame.so";
        var fun_name = "_ZNK21KosovoCurrentDateTime10GetDayTimeERjS0_";
        var soaddr = Module.findBaseAddress(so_name);
        // var funaddr = soaddr.add(0x0000000001CE3818);
        var funaddr = Module.findExportByName(so_name,fun_name);
        // var dword_8E22A8 = soaddr.add(0x008E22A8);
        var dword_8E22A8 = soaddr.add(0x0084EC30);
        console.log("dword_8E22A8:\n",hexdump(dword_8E22A8));
        // dword_8E22A8.writeInt(1);
        console.log("soaddr:",soaddr);
        console.log(fun_name," addr: ",funaddr);
        if(funaddr != null){
                Interceptor.attach(funaddr,{
                        onEnter:function(args){
                                var dword_8E22A8 = soaddr.add(0x008E22A8).readInt();
                                var dword_8E22AC = soaddr.add(0x008E22AC).readInt();
                                var a1 = args[0].readInt();
                                var a2 = args[1].readInt();
                                var a3 = args[2].readInt();
                                var this_add_4 = args[0].add(16).readFloat();
                                // console.error("*(this+4)",this_add_4.readFloat());
                                console.log("dump:\n",hexdump(args[0]));
                                if ( dword_8E22AC < dword_8E22A8 )
                                        dword_8E22AC += 24;
                                var v4 = (((dword_8E22AC * this_add_4) + (dword_8E22A8 * (1.0 - this_add_4))) * 60.0);
                                console.log("v4:",v4);  
                                console.log("dword_8E22A8",dword_8E22A8);
                                console.log("dword_8E22A8",parseInt(dword_8E22A8));
                                console.log("dword_8E22AC",dword_8E22AC);
                                console.log("dword_8E22AC",parseInt(dword_8E22A8));
                                args[0].writeInt(args[0].readInt());
                                console.log("args[0]",args[0]);
                                console.log("args[0]",args[0].readInt());
                                // args[1].writeInt(6);
                                console.log("args[1]",args[1]);
                                console.log("args[1]",args[1].readInt());
                                // args[2].writeInt(10);
                                console.log("args[2]",args[2]);
                                console.log("args[2]",args[2].readInt());
                                // console.log("args[3]",args[1].toInt32());
                                // console.log("args[4]",args[1].toInt32());
                                // console.log("args[5]",args[1].toInt32());
                                // console.log("args[6]",args[1].toInt32());
                                // console.log("args[7]",args[1].toInt32());
                                // console.log(args[4].toInt32());
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                                // console.log("retval:",retval.toInt32());
                                // retval.replace(0);
                                console.log("retval:",retval);
                        }
                        
                        
                })
        }

}
function hook2(){
        var so_name = "libAndroidGame.so";
        var fun_name = "_ZNK21KosovoCurrentDateTime12GetNightTimeERjS0_";
        var soaddr = Module.findBaseAddress(so_name);
        // var funaddr = soaddr.add(0x0000000001CE3818);
        var funaddr = Module.findExportByName(so_name,fun_name);
        // var funaddr = null;
        // var dword_8E22B0 = soaddr.add(0x008E22B0);
        // var dword_8E22B4 = soaddr.add(0x008E22B4);
        // console.log("dword_8E22B0",dword_8E22B0);
        // console.log("dword_8E22B4",dword_8E22B4);
        // console.log("dword_8E22B0:\n",hexdump(dword_8E22B0));
        console.log("soaddr:",soaddr);
        console.log(funaddr,"addr : ",funaddr);
        if(funaddr != null){
                Interceptor.attach(funaddr,{
                        onEnter:function(args){
                                var a1 = args[0].readInt();
                                var a2 = args[1].readInt();
                                var a3 = args[2].readInt();
                                var dword_8E22B0 = soaddr.add(0x008E22B0);
                                var dword_8E22B4 = soaddr.add(0x008E22B4);
                                console.log("dword_8E22B0",dword_8E22B0);
                                console.log("dword_8E22B4",dword_8E22B4);
                                console.log("dword_8E22B0:\n",hexdump(dword_8E22B0));
                                var dword_8E22B0 = dword_8E22B0.readInt();
                                var dword_8E22B4 = dword_8E22B4.readFloat();
                                var this_add_4 = args[0].add(16).readFloat();
                                var this_add_5 = args[0].add(20).readFloat();
                                console.error("dword_8E22B0",dword_8E22B0);
                                console.error("dword_8E22B4",dword_8E22B4);
                                console.error("*(this+4)",this_add_4);
                                console.error("*(this+5)",this_add_5);
                                // console.log("dump:\n",hexdump(args[0]));
                                var v4 = dword_8E22B0 - (((1.0 - this_add_4) * this_add_5) / dword_8E22B4);
                                console.log("v4:",v4);  
                                if ( v4 < 0.0 )
                                        v4 = v4 + 24.0; 
                                console.log("v4:",v4);  
                                var v5 = v4 * 60.0;
                                console.log("v5(a3第一次赋值结果):",v5);  
                                
                                args[0].writeInt(args[0].readInt());
                                console.log("args[0]",args[0]);
                                console.log("args[0]",args[0].readInt());
                                // args[1].writeInt(6);
                                console.log("args[1]",args[1]);
                                console.log("args[1]",args[1].readInt());
                                // args[2].writeInt(10);
                                console.log("args[2]",args[2]);
                                console.log("args[2]",args[2].readInt());
                                // console.log("args[3]",args[1].toInt32());
                                // console.log("args[4]",args[1].toInt32());
                                // console.log("args[5]",args[1].toInt32());
                                // console.log("args[6]",args[1].toInt32());
                                // console.log("args[7]",args[1].toInt32());
                                // console.log(args[4].toInt32());
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                                // console.log("retval:",retval.toInt32());
                                // retval.replace(0);
                                console.log("retval:",retval);
                        }
                        
                        
                })
        }

}
function hook3(){
        var soaddr = Module.findBaseAddress("libAndroidGame.so");
        // var funaddr = soaddr.add(0x0000000001CE3818);
        var funaddr = Module.findExportByName("libAndroidGame.so","_ZN9GameTimer9ResetTimeERK4Time");
        console.log("soaddr:",soaddr);
        console.log("_ZN9GameTimer9ResetTimeERK4Time addr:",funaddr);
        if(funaddr != null){
                Interceptor.attach(funaddr,{
                        onEnter:function(args){
                                console.log("args[0]",args[0]);
                                // console.log("args[0]",args[0].readInt());
                                console.log("args[1]",args[1]);
                                // console.log("args[2]",args[2]);
                                // console.log("args[3]",args[3]);
                                // console.log("args[4]",args[4]);
                                // console.log("args[1]",args[1].readInt());
                                // console.log(typeof args[1]);
                                // console.log("args[2]",args[1].readInt());
                                // console.log("args[3]",args[1].toInt32());
                                // console.log("args[4]",args[1].toInt32());
                                // console.log("args[5]",args[1].toInt32());
                                // console.log("args[6]",args[1].toInt32());
                                // console.log("args[7]",args[1].toInt32());
                                // var a = ptr(0x7884695560);
                                // var b = ptr(0x79096298f4);
                                // console.log("血：",a.readInt());
                                // console.log("血：",b.readInt());
                                // console.log(args[4].toInt32());
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                                console.log("retval:",retval);
                                // retval.replace(0x0);
                        }
                        
                        
                })
        }

}
function hook4(){
        var soaddr = Module.findBaseAddress("libAndroidGame.so");
        // var funaddr = soaddr.add(0x0000000001CE3818);
        var funaddr = Module.findExportByName("libAndroidGame.so","_ZN9GameTimer9ResetTimeERK4Time");
        console.log("soaddr:",soaddr);
        console.log("_ZN9GameTimer9ResetTimeERK4Time addr:",funaddr);
        if(funaddr != null){
                Interceptor.attach(funaddr,{
                        onEnter:function(args){
                                console.log("args[0]",args[0]);
                                // console.log("args[0]",args[0].readInt());
                                console.log("args[1]",args[1]);
                                // console.log("args[2]",args[2]);
                                // console.log("args[3]",args[3]);
                                // console.log("args[4]",args[4]);
                                // console.log("args[1]",args[1].readInt());
                                // console.log(typeof args[1]);
                                // console.log("args[2]",args[1].readInt());
                                // console.log("args[3]",args[1].toInt32());
                                // console.log("args[4]",args[1].toInt32());
                                // console.log("args[5]",args[1].toInt32());
                                // console.log("args[6]",args[1].toInt32());
                                // console.log("args[7]",args[1].toInt32());
                                // var a = ptr(0x7884695560);
                                // var b = ptr(0x79096298f4);
                                // console.log("血：",a.readInt());
                                // console.log("血：",b.readInt());
                                // console.log(args[4].toInt32());
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                                console.log("retval:",retval);
                                // retval.replace(0x0);
                        }
                        
                        
                })
        }

}
function hook5(){
        var so_name = "libAndroidGame.so";
        var fun_name = "_ZNK13BaseAnimation14GetCurrentTimeEv";
        var soaddr = Module.findBaseAddress(so_name);
        // var funaddr = soaddr.add(0x0000000001CE3818);
        var funaddr = Module.findExportByName("libAndroidGame.so","_ZNK13BaseAnimation14GetCurrentTimeEv");
        console.log("soaddr:",soaddr);
        console.log(fun_name," : ",funaddr);
        if(funaddr != null){
                Interceptor.attach(funaddr,{
                        onEnter:function(args){
                                console.log("args[0]",args[0]);
                                // console.log("args[0]",args[0].readInt());
                                console.log("args[1]",args[1]);
                                // console.log("args[2]",args[2]);
                                // console.log("args[3]",args[3]);
                                // console.log("args[4]",args[4]);
                                // console.log("args[1]",args[1].readInt());
                                // console.log(typeof args[1]);
                                // console.log("args[2]",args[1].readInt());
                                // console.log("args[3]",args[1].toInt32());
                                // console.log("args[4]",args[1].toInt32());
                                // console.log("args[5]",args[1].toInt32());
                                // console.log("args[6]",args[1].toInt32());
                                // console.log("args[7]",args[1].toInt32());
                                // var a = ptr(0x7884695560);
                                // var b = ptr(0x79096298f4);
                                // console.log("血：",a.readInt());
                                // console.log("血：",b.readInt());
                                // console.log(args[4].toInt32());
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                                console.log("retval:",retval);
                                // retval.replace(0x0);
                        }
                        
                        
                })
        }

}
function hook6(){
        var so_name = "libAndroidGame.so";
        var fun_name = "_ZN21KosovoCurrentDateTime11SetProgressEf";
        var soaddr = Module.findBaseAddress(so_name);
        // var funaddr = soaddr.add(0x0000000001CE3818);
        var funaddr = Module.findExportByName(so_name,fun_name);
        // var funaddr = null;
        console.log("soaddr:",soaddr);
        console.log(fun_name," addr: ",funaddr);
        if(funaddr != null){
                Interceptor.attach(funaddr,{
                        onEnter:function(args){
                                console.log("args[0]",args[0]);
                                console.log("args[0]",args[0].readInt());
                                console.log("args[1]",args[1]);
                                args[1] = ptr(0);
                                console.log("args[1]",args[1]);
                                // console.log("args[1]",args[1].readFloat());
                                // console.log("args[0]",args[0].readInt());
                                // console.log("args[1]",args[1]);
                                // console.log("args[2]",args[2]);
                                // console.log("args[3]",args[3]);
                                // console.log("args[4]",args[4]);
                                // console.log("args[1]",args[1].readInt());
                                // console.log(typeof args[1]);
                                // console.log("args[2]",args[1].readInt());
                                // console.log("args[3]",args[1].toInt32());
                                // console.log("args[4]",args[1].toInt32());
                                // console.log("args[5]",args[1].toInt32());
                                // console.log("args[6]",args[1].toInt32());
                                // console.log("args[7]",args[1].toInt32());
                                // var a = ptr(0x7884695560);
                                // var b = ptr(0x79096298f4);
                                // console.log("血：",a.readInt());
                                // console.log("血：",b.readInt());
                                // console.log(args[4].toInt32());
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                                console.log("retval:",retval);
                                // retval.replace(0x0);
                        }
                        
                        
                })
        }

}
function hook7(){
        var so_name = "libAndroidGame.so";
        var fun_name = "_ZN21KosovoCurrentDateTime11SetProgressEf";
        var soaddr = Module.findBaseAddress(so_name);
        var funaddr = Module.findExportByName(so_name,fun_name);
        console.log("soaddr:",soaddr);
        console.log(fun_name," : ",funaddr);
        if(startaddr != null){
                Interceptor.attach(startaddr,{
                        onEnter:function(args){
                                console.log("args[0]",args[0]);
                                console.log("args[1]",args[1]);
                                // console.log("args[0]",args[0]);
                                // // console.log("args[0]",args[0].readInt());
                                // console.log("args[1]",args[1]);
                                // console.log("args[2]",args[2]);
                                // console.log("args[3]",args[3]);
                                // console.log("args[4]",args[4]);
                                // console.log("args[1]",args[1].readInt());
                                // console.log(typeof args[1]);
                                // console.log("args[2]",args[1].readInt());
                                // console.log("args[3]",args[1].toInt32());
                                // console.log("args[4]",args[1].toInt32());
                                // console.log("args[5]",args[1].toInt32());
                                // console.log("args[6]",args[1].toInt32());
                                // console.log("args[7]",args[1].toInt32());
                                // var a = ptr(0x7884695560);
                                // var b = ptr(0x79096298f4);
                                // console.log("血：",a.readInt());
                                // console.log("血：",b.readInt());
                                // console.log(args[4].toInt32());
                                // console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                // console.log("onLeave");
                                // console.log("retval:",retval);
                                // retval.replace(0x0);
                        }
                        
                        
                })
        }

}
function test(){
        var so_name = "libAndroidGame.so";
        var fun_name = "_ZNK21KosovoCurrentDateTime12GetNightTimeERjS0_";
        var soaddr = Module.findBaseAddress(so_name);
        // var funaddr = soaddr.add(0x0000000001CE3818);
        var gKosovoCurrentDateTime = soaddr.add(0x008E11F0);
        console.log("gKosovoCurrentDateTime addr:",gKosovoCurrentDateTime);
        var gKosovoCurrentDateTime = soaddr.add(0x008E11F0);
        console.log("gKosovoCurrentDateTime addr:",gKosovoCurrentDateTime);
        var funaddr = Module.findExportByName(so_name,fun_name);
        var funaddr = null;
        console.log("soaddr:",soaddr);
        // console.log(fun_name," addr: ",funaddr);
        if(funaddr != null){
                Interceptor.attach(funaddr,{
                        onEnter:function(args){
                                // this.context.pc = endaddr;
                                // console.log(JSON.stringify(this.context));
                                // console.log("args[0]",args[0]);
                                // // console.log("args[0]",args[0].readInt());
                                // console.log("args[1]",args[1]);
                                // console.log("args[2]",args[2]);
                                // console.log("args[3]",args[3]);
                                // console.log("args[4]",args[4]);
                                // console.log("args[1]",args[1].readInt());
                                // console.log(typeof args[1]);
                                // console.log("args[2]",args[1].readInt());
                                // console.log("args[3]",args[1].toInt32());
                                // console.log("args[4]",args[1].toInt32());
                                // console.log("args[5]",args[1].toInt32());
                                // console.log("args[6]",args[1].toInt32());
                                // console.log("args[7]",args[1].toInt32());
                                // var a = ptr(0x7884695560);
                                // var b = ptr(0x79096298f4);
                                // console.log("血：",a.readInt());
                                // console.log("血：",b.readInt());
                                // console.log(args[4].toInt32());
                                // console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                // console.log("onLeave");
                                // console.log("retval:",retval);
                                // retval.replace(0x0);
                        }
                        
                        
                })
        }

}
function main(){
        console.log("main begin");
        // hook1();
        // hook2()
        // hook3();
        // hook4();
        // hook5()
        // hook6();
        // hook7();
        test();
        console.log("main end");
}
setImmediate(main)