function hook1(){
        var soaddr = Module.findBaseAddress("libAndroidGame.so");
        // var funaddr = soaddr.add(0x0000000001CE3818);
        var funaddr = Module.findExportByName("libAndroidGame.so","_ZNK21KosovoCurrentDateTime10GetDayTimeERjS0_");
        console.log("soaddr:",soaddr);
        console.log("_ZNK21KosovoCurrentDateTime10GetDayTimeERjS0_ addr:",funaddr);
        if(funaddr != null){
                Interceptor.attach(funaddr,{
                        onEnter:function(args){
                                console.log("args[0]",args[0]);
                                console.log("args[0]",args[0].readInt());
                                args[1].writeInt(0);
                                console.log("args[1]",args[1]);
                                console.log("args[1]",args[1].readInt());
                                // args[2].writeInt(0);
                                console.log("args[2]",args[2]);
                                console.log("args[2]",args[2].readInt());
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
                                // console.log("retval:",retval.toInt32());
                                // retval.replace(0);
                                console.log("retval:",retval.toInt32());
                        }
                        
                        
                })
        }

}
function hook2(){
        var soaddr = Module.findBaseAddress("libAndroidGame.so");
        // var funaddr = soaddr.add(0x0000000001CE3818);
        var funaddr = Module.findExportByName("libAndroidGame.so","_ZNK16KosovoMainParams15GetDayTimeRatioEv");
        console.log("soaddr:",soaddr);
        console.log("fun addr:",funaddr);
        if(funaddr != null){
                Interceptor.attach(funaddr,{
                        onEnter:function(args){
                                console.log("args[0]",args[0]);
                                console.log("args[0]",args[0].readFloat());
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
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                                console.log("retval:",retval);
                                console.log("retval:",retval.readFloat());
                                // retval.replace(0x0);
                        }
                        
                        
                })
        }

}
function hook3(){
        var soaddr = Module.findBaseAddress("libil2cpp.so");
        var funaddr = soaddr.add(0x0000000001DB4D9d);
        // var funaddr = Module.findExportByName("libil2cpp.so","il2cpp_field_set_value")
        console.log("soaddr:",soaddr);
        console.log("killMe addr:",funaddr);
        if(funaddr != null){
                Interceptor.attach(funaddr,{
                        onEnter:function(args){
                                console.log("onEnter");
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                        }
                        
                        
                })
        }

}
function hook4(){
        var soaddr = Module.findBaseAddress("libil2cpp.so");
        // var funaddr = soaddr.add(0x0000000001E17989);
        var funaddr = Module.findExportByName("libAndroidGame.so","il2cpp_field_set_value_ZN24KosovoInventoryContainer10AddElementERK10NameStringRK27KosovoInventoryElementEntry");
        console.log("soaddr:",soaddr);
        console.log("killMe addr:",funaddr);
        if(funaddr != null){
                Interceptor.attach(funaddr,{
                        onEnter:function(args){
                                console.log("onEnter");
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                        }
                        
                        
                })
        }

}
function main(){
        console.log("main begin");
        hook1();
        // hook2();
        // hook3();
        // hook4();
        console.log("main end");
}
setImmediate(main)