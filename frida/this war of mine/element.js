function hex2float(num){
	var a = num;
	var b = parseInt(a,16);
	var s = b&0x80000000/0x80000000;
	var e = (b&0x7f800000)/0x800000-127;
	var c = (b&0x7fffff)/0x800000;
	var re = Math.pow(-1,s)*(1+c)*Math.pow(2,e);
	return re;
}
function call_native(a,b){
        var so_name_str = "libAndroidGame.so";
        var call_native_fun_str = "_ZN22KosovoInventoryElement10AddElementERK27KosovoInventoryElementEntry";
        var call_native_fun_addr = Module.findExportByName(so_name_str,call_native_fun_str);
        console.log("call_native_fun_addr:",call_native_fun_addr);
        var call_native_fun = new NativeFunction(call_native_fun_addr , 'int', ['pointer','pointer']);
        var a = ptr(a);
        var b = ptr(b);
        // var c = ptr(c);
        var str_data="Materials";
        var str_data_arg = Memory.allocUtf8String(str_data);
        console.log("str_data_arg:",str_data_arg,":",str_data_arg.readCString());

        var a = Memory.alloc(8);
        a.writePointer(str_data_arg);
        console.log("a:",a);
        console.log("a.readpointer():",a.readPointer());
        console.log("a.readpointer().readcstring():",a.readPointer().readCString());
        console.log("args[1].readpointer().readcstring():",args[1].readPointer().readCString());
        a.sub(20);
        console.log(a);
        call_native_fun(a,b);
        call_native_fun(a,b);
        call_native_fun(a,b);
        call_native_fun(a,b);
        call_native_fun(a,b);
        call_native_fun(a,b);
        call_native_fun(a,b);
        call_native_fun(a,b);
        call_native_fun(a,b);
        call_native_fun(a,b);
        call_native_fun(a,b);
        call_native_fun(a,b);
        call_native_fun(a,b);
        call_native_fun(a,b);
        // call_native_fun(a,b,c);
        // call_native_fun(a,b,c);
        // call_native_fun(a,b,c);
        // call_native_fun(a,b,c);
        // call_native_fun(a,b,c);
        // call_native_fun(a,b,c);
        // call_native_fun(a,b,c);
        // call_native_fun(a,b,c);
        // call_native_fun(a,b,c);
        // call_native_fun(a,b,c);

}
function StealSpecific(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN24KosovoInventoryContainer13StealSpecificERS_PK22KosovoInventoryElementii";
        var so_addr = Module.findBaseAddress(so_name_str);
        // var fun_addr = so_addr.add(0x0000000001CE3818);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        console.log("so_addr:",so_addr);
        console.log(fun_name_str," addr: ",fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                // var a1 = args[0].readInt();
                                // var a2 = args[1].readInt();
                                // var a3 = args[2].readInt();
                                // args[0].writeInt(args[0].readInt());
                                console.log("======================================================================");
                                console.log("args[0]",args[0]);
                                // console.log("args[0]",args[0].readInt());
                                // args[1].writeInt(6);
                                console.log("args[1]",args[1]);
                                console.log("args[2]",args[2]);
                                console.log("args[3]",args[3]);
                                console.log("args[4]",args[4]);
                                // console.log("args[1]",args[1].readInt());
                                // args[2].writeInt(10);
                                // console.log("args[2]",args[2]);
                                // console.log("args[2]",args[2].readInt());
                                // console.log("args[3]",args[1].toInt32());
                                // console.log("args[4]",args[1].toInt32());
                                // console.log("args[5]",args[1].toInt32());
                                // console.log("args[6]",args[1].toInt32());
                                // console.log("args[7]",args[1].toInt32());
                                // console.log(args[4].toInt32());
                                // console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                                // console.log("retval:",retval.toInt32());
                                // retval.replace(0);
                                console.log("retval:",retval);
                                console.log("======================================================================");
                        }
                        
                        
                })
        }

}
function add_element1(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN22KosovoInventoryElement10AddElementERK27KosovoInventoryElementEntry";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        // var fun_addr = null;
        console.log("so_addr:",so_addr);
        console.log(fun_name_str," addr: ",fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log("======================================================================");
                                console.log("args[0]",args[0]);
                                console.log("args[1]",args[1]);
                                // console.log("args[2]",args[2]); 
                                var call_native_fun_str = "_ZN22KosovoInventoryElement10AddElementERK27KosovoInventoryElementEntry";
                                var call_native_fun_addr = Module.findExportByName(so_name_str,call_native_fun_str);
                                console.log("call_native_fun_addr:",call_native_fun_addr);
                                var call_native_fun = new NativeFunction(call_native_fun_addr , 'int', ['pointer','pointer']);
                                // var str_data="Materials";
                                // var str_data_arg = Memory.allocUtf8String(str_data);
                                // console.log("str_data_arg:",str_data_arg,":",str_data_arg.readCString());

                                // var a = Memory.alloc(8);
                                // a.writePointer(str_data_arg);
                                // console.log("a:",a);
                                // console.log("a.readpointer():",a.readPointer());
                                // console.log("a.readpointer().readcstring():",a.readPointer().readCString());
                                // console.log("args[1].readpointer().readcstring():",args[1].readPointer().readCString());
                                // args[1].writePointer(str_data_arg);
                                // args[1].readPointer().writePointer(str_data_arg);
                                // console.log(a);
                                // console.log(ptr(args[1]).readpointer().readCString());
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],a,args[2]);
                                // call_native_fun(args[0],a,args[2]);
                                // call_native_fun(args[0],a,args[2]);
                                // call_native_fun(args[0],a,args[2]);
                                // call_native_fun(args[0],a,args[2]);
                                // call_native_fun(args[0],a,args[2]);
                                // call_native_fun(args[0],a,args[2]);
                                // call_native_fun(args[0],a,args[2]);
                                // call_native_fun(args[0],a,args[2]);
                                // call_native_fun(args[0],a,args[2]);
                                // call_native_fun(args[0],a,args[2]);
                                // call_native_fun(args[0],a,args[2]);
                                // call_native_fun(args[0],a,args[2]);
                                // call_native_fun(args[0],a,args[2]);
                                // call_native_fun(args[0],a,args[2]);
                                // // call_native_fun(args[0],str_data_arg,args[2]);
                                // // call_native_fun(args[0],str_data_arg,args[2]);
                                // // call_native_fun(args[0],str_data_arg,args[2]);
                                // // call_native_fun(args[0],str_data_arg,args[2]);
                                // // call_native_fun(args[0],str_data_arg,args[2]);
                                // // call_native_fun(args[0],str_data_arg,args[2]);
                                // // call_native_fun(args[0],str_data_arg,args[2]);
                                // // call_native_fun(args[0],str_data_arg,args[2]);
                                // // call_native_fun(args[0],str_data_arg,args[2]);
                                // // call_native_fun(args[0],str_data_arg,args[2]);
                                // // call_native_fun(args[0],str_data_arg,args[2]);
                                // // call_native_fun(args[0],str_data_arg,args[2]);
                                // // call_native_fun(args[0],str_data_arg,args[2]);
                                // // call_native_fun(args[0],ptr(0x9fb90060),ptr(0));
                                // // call_native_fun(args[0],ptr(0x9fb90060),ptr(0));
                                // // call_native_fun(args[0],ptr(0x9fb90060),ptr(0));
                                // // call_native_fun(args[0],ptr(0x9fb90060),ptr(0));
                                // // call_native_fun(args[0],ptr(0x9fb90060),ptr(0));
                                // // call_native_fun(args[0],ptr(0x9fb90060),ptr(0));
                                // // call_native_fun(args[0],ptr(0x9fb90060),ptr(0));
                                // // call_native_fun(args[0],ptr(0x9fb90060),ptr(0));
                                // // call_native_fun(args[0],ptr(0x9fb90060),ptr(0));
                                // // call_native_fun(args[0],ptr(0x9fb90060),ptr(0));
                                // // call_native_fun(args[0],ptr(0x9fb90060),ptr(0));
                                // // call_native_fun(args[0],ptr(0x9fb90060),ptr(0));
                                // // call_native_fun(args[0],ptr(0x9fb90060),ptr(0));
                                // // call_native_fun(args[0],ptr(0x9fb90060),ptr(0));
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],ptr(0x9fb90060),ptr(0));
                                // // call_native_fun(args[0],ptr(0x9fb90060),ptr(0));
                                // // call_native_fun(args[0],ptr(0x9fb90060),ptr(0));
                                // // call_native_fun(args[0],ptr(0x9fb90060),ptr(0));
                                // // call_native_fun(args[0],ptr(0x9fb90060),ptr(0));
                                // // call_native_fun(args[0],ptr(0x9fb90060),ptr(0));
                                // // call_native_fun(args[0],ptr(0x9fb90060),ptr(0));
                                // // call_native_fun(args[0],ptr(0x9fb90060),ptr(0));
                                // // call_native_fun(args[0],ptr(0x9fb90060),ptr(0));
                                // // call_native_fun(args[0],ptr(0x9fb90060),ptr(0));
                                // // call_native_fun(args[0],ptr(0x9fb90060),args[2]);
                                // // call_native_fun(args[0],ptr(0x9fb90060),args[2]);
                                // // call_native_fun(args[0],ptr(0x9fb90060),args[2]);
                                // // call_native_fun(args[0],ptr(0x9fb90060),args[2]);
                                // // call_native_fun(args[0],ptr(0x9fb90060),args[2]);
                                // // call_native_fun(args[0],ptr(0x9fb90060),args[2]);
                                // // call_native_fun(args[0],ptr(0x9fb90060),args[2]);
                                // // call_native_fun(args[0],ptr(0x9fb90060),args[2]);
                                // // call_native_fun(args[0],ptr(0x9fb90060),args[2]);
                                // // call_native_fun(args[0],ptr(0x9fb90060),args[2]);
                                // // call_native_fun(args[0],ptr(0x9fb90060),args[2]);
                                // // call_native_fun(args[0],ptr(0x9fb90060),args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // call_native_fun(args[0],args[1],args[2]);
                                // // this.context.pc = endaddr;
                                // // console.log(JSON.stringify(this.context));
                                // console.log("args[0]",args[0]);
                                // // // console.log("args[0]",args[0].readInt());
                                // console.log("args[1]",args[1]);
                                // console.log("args[2]",args[2]);
                                // console.log("args[3]",args[3]);
                                // console.log("args[4]",args[4]);
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                                console.log("retval:",retval);
                                // retval.replace(0x1);
                                console.log("======================================================================");
                        }
                        
                        
                })
        }

}
function add_element(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN24KosovoInventoryContainer10AddElementERK10NameStringRK27KosovoInventoryElementEntry";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        // var fun_addr = null;
        console.log("so_addr:",so_addr);
        console.log(fun_name_str," addr: ",fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log("======================================================================");
                                console.log("args[0]",args[0]);
                                console.log("args[1]",args[1]);
                                console.log("args[2]",args[2]); 
                                var call_native_fun_str = "_ZN24KosovoInventoryContainer10AddElementERK10NameStringRK27KosovoInventoryElementEntry";
                                var call_native_fun_addr = Module.findExportByName(so_name_str,call_native_fun_str);
                                console.log("call_native_fun_addr:",call_native_fun_addr);
                                var call_native_fun = new NativeFunction(call_native_fun_addr , 'int', ['pointer','pointer','pointer']);
                                var str_data="Materials";
                                var str_data_arg = Memory.allocUtf8String(str_data);
                                console.log("str_data_arg:",str_data_arg,":",str_data_arg.readCString());

                                var a = Memory.alloc(8);
                                a.writePointer(str_data_arg);
                                console.log("a:",a);
                                console.log("a.readpointer():",a.readPointer());
                                console.log("a.readpointer().readcstring():",a.readPointer().readCString());
                                console.log("args[1].readpointer().readcstring():",args[1].readPointer().readCString());
                                a.sub(20);
                                console.log(a);
                                // args[1].writePointer(str_data_arg);
                                // args[1].readPointer().writePointer(str_data_arg);
                                // console.log(a);
                                // console.log(ptr(args[1]).readpointer().readCString());
                                call_native_fun(args[0],args[1],args[2]);
                                call_native_fun(args[0],a,args[2]);
                                call_native_fun(args[0],a,args[2]);
                                call_native_fun(args[0],a,args[2]);
                                call_native_fun(args[0],a,args[2]);
                                call_native_fun(args[0],a,args[2]);
                                call_native_fun(args[0],a,args[2]);
                                call_native_fun(args[0],a,args[2]);
                                call_native_fun(args[0],a,args[2]);
                                call_native_fun(args[0],a,args[2]);
                                call_native_fun(args[0],a,args[2]);
                                call_native_fun(args[0],a,args[2]);
                                call_native_fun(args[0],a,args[2]);
                                call_native_fun(args[0],a,args[2]);
                                call_native_fun(args[0],a,args[2]);
                                call_native_fun(args[0],a,args[2]);
                                console.log("args[0]",args[0]);
                                console.log("args[1]",args[1]);
                                console.log("args[2]",args[2]);
                                // console.log("args[3]",args[3]);
                                // console.log("args[4]",args[4]);
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                                console.log("retval:",retval);
                                // retval.replace(0x0);
                                console.log("======================================================================");
                        }
                        
                        
                })
        }

}
function hook1(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN24KosovoInventoryContainer10AddElementERK22KosovoInventoryElement";
        var so_addr = Module.findBaseAddress(so_name_str);
        // var fun_addr = so_addr.add(0x0000000001CE3818);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        console.log("so_addr:",so_addr);
        console.log(fun_name_str," addr: ",fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                // var a1 = args[0].readInt();
                                // var a2 = args[1].readInt();
                                // var a3 = args[2].readInt();
                                // args[0].writeInt(args[0].readInt());
                                console.log("args[0]",args[0]);
                                // console.log("args[0]",args[0].readInt());
                                // args[1].writeInt(6);
                                console.log("args[1]",args[1]);
                                // console.log("args[1]",args[1].readInt());
                                // args[2].writeInt(10);
                                // console.log("args[2]",args[2]);
                                // console.log("args[2]",args[2].readInt());
                                // console.log("args[3]",args[1].toInt32());
                                // console.log("args[4]",args[1].toInt32());
                                // console.log("args[5]",args[1].toInt32());
                                // console.log("args[6]",args[1].toInt32());
                                // console.log("args[7]",args[1].toInt32());
                                // console.log(args[4].toInt32());
                                // console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
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
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN24KosovoInventoryContainer10AddElementERK10NameStringRK27KosovoInventoryElementEntry";
        var so_addr = Module.findBaseAddress(so_name_str);
        // var fun_addr = so_addr.add(0x0000000001CE3818);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        // var fun_addr = null;
        console.log("so_addr:",so_addr);
        console.log(fun_addr,"addr : ",fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log(this.context.$s16);
                                // var a1 = args[0].readInt();
                                // var a2 = args[1].readInt();
                                // var a3 = args[2].readInt();
                                console.log("args[0]",args[0]);
                                // console.log("args[0]",args[0].readInt());
                                // args[1].writeInt(6);
                                console.log("args[1]",args[1]);
                                console.log("args[2]",args[2]);
                                // args[0].writeInt(args[0].readInt());
                                // console.log("args[1]",args[1].readInt());
                                // args[2].writeInt(10);
                                // console.log("args[2]",args[2]);
                                // console.log("args[2]",args[2].readInt());
                                // console.log("args[3]",args[1].toInt32());
                                // console.log("args[4]",args[1].toInt32());
                                // console.log("args[5]",args[1].toInt32());
                                // console.log("args[6]",args[1].toInt32());
                                // console.log("args[7]",args[1].toInt32());
                                // console.log(args[4].toInt32());
                                // console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
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
        var so_addr = Module.findBaseAddress("libAndroidGame.so");
        // var fun_addr = so_addr.add(0x0000000001CE3818);
        var fun_addr = Module.findExportByName("libAndroidGame.so","_ZN15KosovoFlowState14BeginNextPhaseEv");
        console.log("so_addr:",so_addr);
        console.log("_ZN9GameTimer9ResetTimeERK4Time addr:",fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
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
        var so_addr = Module.findBaseAddress("libAndroidGame.so");
        // var fun_addr = so_addr.add(0x0000000001CE3818);
        var fun_addr = Module.findExportByName("libAndroidGame.so","_ZN9GameTimer9ResetTimeERK4Time");
        console.log("so_addr:",so_addr);
        console.log("_ZN9GameTimer9ResetTimeERK4Time addr:",fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
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
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZNK13BaseAnimation14GetCurrentTimeEv";
        var so_addr = Module.findBaseAddress(so_name_str);
        // var fun_addr = so_addr.add(0x0000000001CE3818);
        var fun_addr = Module.findExportByName("libAndroidGame.so","_ZNK13BaseAnimation14GetCurrentTimeEv");
        console.log("so_addr:",so_addr);
        console.log(fun_name_str," : ",fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
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
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN21KosovoCurrentDateTime11SetProgressEf";
        var so_addr = Module.findBaseAddress(so_name_str);
        // var fun_addr = so_addr.add(0x0000000001CE3818);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        // var fun_addr = null;
        console.log("so_addr:",so_addr);
        console.log(fun_name_str," addr: ",fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log(JSON.stringify(this.context));
                                console.log("so_addr:",so_addr);
                                this.context.pc = 0xc3c721f0;
                                console.log(this.context.pc);
                        // if(args[1] == 0x3f800000){
                                console.log("args[0]",args[0]);
                                console.log("args[0]",args[0].readInt());
                                console.log("args[1]",args[1]);
                                // console.log("args[1]",args[1]);
                                args[1] = ptr(0x3f8000000);
                                // console.log("args[1]",args[1]);
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
                        // }
                        },
                        onLeave:function(retval){
                                // console.log("onLeave");
                                // console.log("retval:",retval);
                                // retval.replace(0x0);
                        }
                        
                        
                })
        }

}
function hook7(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN15KosovoFlowState14BeginNextPhaseEv";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        console.log("so_addr:",so_addr);
        console.log(fun_name_str," addr: ",fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log("args[0]",args[0]);
                                // console.log("args[1]",args[1]);
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
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                // console.log("onLeave");
                                // console.log("retval:",retval);
                                // retval.replace(0x0);
                        }
                        
                        
                })
        }

}
function hook8(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN23KosovoFlowStateScavenge13OnEndScavengeEv";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        console.log("so_addr:",so_addr);
        console.log(fun_name_str," addr: ",fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log("args[0]",args[0]);
                                console.log("*((Byte*)this+52)",args[0].add(52).readInt());

                                // console.log("args[1]",args[1]);
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
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                // console.log("onLeave");
                                console.log("retval:",retval);
                                // retval.replace(0x0);
                        }
                        
                        
                })
        }

}

function hook9(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN24KosovoGameFlowController9PauseTickEv";
        var fun_name_str = "_ZN11KosovoScene6OnTickEv";
        // var fun_name_str = "j__ZN11KosovoScene11OnPauseTickEv";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        var dword_8AA830 = so_addr.add(0x0008AA830);
        console.log("dword_8AA830 addr:",dword_8AA830);
        console.log("so_addr:",so_addr);
        console.log(fun_name_str," addr: ",fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log("args[0]",args[0]);
                                // console.log("*((Byte*)this+52)",args[0].add(32).readInt());

                                // console.log("args[1]",args[1]);
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
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                // console.log("onLeave");
                                console.log("retval:",retval);
                                // retval.replace(0x0);
                        }
                        
                        
                })
        }

}
function hook10(){
        var so_name_str = "libAndroidGame.so";
        // var fun_name_str = "_ZN19KosovoGameStateGame6OnTickEv";
        // var fun_name_str = "_ZN24KosovoGameFlowController4TickEv";
        // var fun_name_str = "_ZN24KosovoGameFlowController9PauseTickEv";
        var fun_name_str = "_ZN24KosovoInventoryContainer12AddSlotCountEi";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        console.log("so_addr:",so_addr);
        console.log(fun_name_str," addr: ",fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log("args[0]",args[0]);
                                // console.log("*((Byte*)this+52)",args[0].add(32).readInt());

                                // console.log("args[1]",args[1]);
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
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                // console.log("onLeave");
                                console.log("retval:",retval);
                                // retval.replace(0x0);
                        }
                        
                        
                })
        }

}
function testas(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZNK24KosovoInventoryContainer17GetAvailableSlotsEv";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        // var fun_addr = null;
        console.log("so_addr:",so_addr);
        console.log(fun_name_str," addr: ",fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                var call_native_fun_str = "_ZN24KosovoInventoryContainer12AddSlotCountEi";
                                var call_native_fun_addr = Module.findExportByName(so_name_str,call_native_fun_str);
                                console.log("call_native_fun_addr:",call_native_fun_addr);
                                var call_native_fun = new NativeFunction(call_native_fun_addr , 'pointer', ['pointer','int']);
                                call_native_fun(args[0],10);
                                // this.context.pc = endaddr;
                                // console.log(JSON.stringify(this.context));
                                // console.log("args[0]",args[0]);
                                // // console.log("args[0]",args[0].readInt());
                                // console.log("args[1]",args[1]);
                                // console.log("args[2]",args[2]);
                                // console.log("args[3]",args[3]);
                                // console.log("args[4]",args[4]);
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                // console.log("onLeave");
                                // console.log("retval:",retval);
                                // retval.replace(0x0);
                        }
                        
                        
                })
        }

}

function test1(){
        var so_name_str = "libAndroidGame.so";
        // var fun_name_str = "_ZNK21KosovoCurrentDateTime12GetNightTimeERjS0_";
        var so_addr = Module.findBaseAddress(so_name_str);
        // var fun_addr = so_addr.add(0x0000000001CE3818);
        // var gKosovoCurrentDateTime = so_addr.add(0x008E11F0);
        // var gKosovoScavengeReturnSystem = so_addr.add(0x0008E33E0);
        // console.log("gKosovoScavengeReturnSystem addr:",gKosovoScavengeReturnSystem);
        var byte_8AA82C = so_addr.add(0x0008AA82C);
        console.log("byte_8AA82C addr:",byte_8AA82C);
        var dword_8AA830 = so_addr.add(0x0008AA830);
        console.log("dword_8AA830 addr:",dword_8AA830);
        var gKosovoScene = so_addr.add(0x008E3524);
        console.log("gKosovoScene addr:",gKosovoScene)
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        var fun_addr = null;
        console.log("so_addr:",so_addr);
        // console.log(fun_name_str," addr: ",fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
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
function inlinehook1(){
        var so_name_str = "libAndroidGame.so";
        // var fun_name_str = "_ZNK21KosovoCurrentDateTime12GetNightTimeERjS0_";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = so_addr.add(0x005AA51C);
        var endaddr = so_addr.add(0x005AA580);
        // var fun_addr = ptr(0xC4F86A1E);
        // var gKosovoCurrentDateTime = so_addr.add(0x008E11F0);
        // console.log("gKosovoCurrentDateTime addr:",gKosovoCurrentDateTime);
        // var gKosovoCurrentDateTime = so_addr.add(0x008E11F0);
        // console.log("gKosovoCurrentDateTime addr:",gKosovoCurrentDateTime);
        // var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        // var fun_addr = null;
        console.log("so_addr:",so_addr);
        console.log("fun addr: ",fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                this.context.pc = endaddr;
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
        // StealSpecific();
        // add_element();
        add_element1();
        // hook1();
        // hook2()
        // hook3();
        // hook4();
        // hook5()
        // hook6();
        // hook7();
        // hook8();
        // hook9();
        // hook10();
        // call_native();
        // inlinehook1();
        console.log("main end");
}
setImmediate(main)