//Global_var
var NameString;
var NameString_this;
var KosovoInventoryContainer_this;
function get_container(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZNK24KosovoInventoryContainer17GetAvailableSlotsEv";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        // console.log(so_name_str,' ',so_addr);
        // console.log(fun_name_str,' ',fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                // console.log("======================================================================");
                                // console.log("_ZN27KosovoCraftingBaseComponent14OnTickCraftingEf");
                                // console.log("args[0]",args[0]);
                                if (KosovoInventoryContainer_this != null){
                                        return ;
                                }       
                                KosovoInventoryContainer_this = args[0];
                                // console.log("args[1]",args[1]);
                                // args[1] = ptr(0x42c80000);
                                // console.log("args[1]",args[1]);
                                // console.log("args[2]",args[2]);
                                // console.log("args[2]",args[2].toInt32());
                                // console.log("args[3]",args[3]);
                                // console.log("args[3]",args[3].toInt32());
                                // console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                // console.log("onLeave");
                                // console.log("retval:",retval);
                                // retval.replace(0x10);
                                // console.log("retval:",retval);
                                // console.log("======================================================================");

                        }
                })
        }
}
function get_namestring(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN10NameStringC2EPKc";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        // console.log(so_name_str,' ',so_addr);
        // console.log(fun_name_str,' ',fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                // console.log("======================================================================");
                                // console.log("_ZN10NameStringC2EPKc");
                                // console.log("args[0]",args[0]);
                                if (NameString_this != null){
                                        return ;
                                }       
                                NameString_this = args[0];
                                // console.log("args[1]",args[1]);
                                // args[1] = ptr(0x42c80000);
                                // console.log("args[1]",args[1]);
                                // console.log("args[2]",args[2]);
                                // console.log("args[2]",args[2].toInt32());
                                // console.log("args[3]",args[3]);
                                // console.log("args[3]",args[3].toInt32());
                                // console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                // console.log("onLeave");
                                // console.log("retval:",retval);
                                // retval.replace(0x10);
                                // console.log("retval:",retval);
                                // console.log("======================================================================");

                        }
                })
        }
}
function crafting20(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN23KosovoCraftingComponent25AddCraftedItemToInventoryEj";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        console.log(so_name_str,' ',so_addr);
        console.log(fun_name_str,' ',fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log("20======================================================================");
                                console.log("_ZN23KosovoCraftingComponent25AddCraftedItemToInventoryEj");
                                console.log("args[0]",args[0]);
                                console.log("args[1]",args[1]);
                                args[1] = ptr(20);
                                // console.log("args[2]",args[2]);
                                // console.log("args[3]",args[3]);
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                                console.log("retval:",retval);
                                // retval.replace(0x10);
                                // console.log("retval:",retval);
                                console.log("20======================================================================");
                        }
                })
        }
}

function fast_crafting6(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN27KosovoCraftingBaseComponent14OnTickCraftingEf";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        console.log(so_name_str,' ',so_addr);
        console.log(fun_name_str,' ',fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log("======================================================================");
                                console.log("_ZN27KosovoCraftingBaseComponent14OnTickCraftingEf");
                                console.log("args[0]",args[0]);
                                console.log("args[1]",args[1]);
                                args[1] = ptr(0x42c80000);
                                console.log("args[1]",args[1]);
                                // console.log("args[2]",args[2]);
                                // console.log("args[2]",args[2].toInt32());
                                // console.log("args[3]",args[3]);
                                // console.log("args[3]",args[3].toInt32());
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                                console.log("retval:",retval);
                                // retval.replace(0x10);
                                // console.log("retval:",retval);
                                console.log("======================================================================");

                        }
                })
        }
}

function fast_crafting(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN27KosovoConstructionComponent18OnCraftingFinishedEv";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        console.log(so_name_str,' ',so_addr);
        console.log(fun_name_str,' ',fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log("======================================================================");
                                console.log("_ZN27KosovoConstructionComponent18OnCraftingFinishedEv");
                                console.log("args[0]",args[0]);
                                console.log("args[1]",args[1]);
                                console.log("args[1]",args[1].toInt32());
                                console.log("args[2]",args[2]);
                                console.log("args[2]",args[2].toInt32());
                                console.log("args[3]",args[3]);
                                console.log("args[3]",args[3].toInt32());
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                                console.log("retval:",retval);
                                // retval.replace(0x10);
                                // console.log("retval:",retval);
                                console.log("======================================================================");

                        }
                })
        }
}

function fast_crafting2(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN23KosovoCraftingComponent18OnCraftingFinishedEv";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        console.log(so_name_str,' ',so_addr);
        console.log(fun_name_str,' ',fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log("======================================================================");
                                console.log("_ZN23KosovoCraftingComponent18OnCraftingFinishedEv");
                                console.log("args[0]",args[0]);
                                console.log("args[1]",args[1]);
                                console.log("args[1]",args[1].toInt32());
                                console.log("args[2]",args[2]);
                                console.log("args[2]",args[2].toInt32());
                                console.log("args[3]",args[3]);
                                console.log("args[3]",args[3].toInt32());
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                                console.log("retval:",retval);
                                // retval.replace(0x10);
                                // console.log("retval:",retval);
                                console.log("======================================================================");

                        }
                })
        }
}
function fast_crafting3(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN23KosovoCraftingComponent25AddCraftedItemToInventoryEj";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        console.log(so_name_str,' ',so_addr);
        console.log(fun_name_str,' ',fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log("======================================================================");
                                console.log("_ZN23KosovoCraftingComponent25AddCraftedItemToInventoryEj");
                                console.log("args[0]",args[0]);
                                console.log("args[1]",args[1]);
                                console.log("args[1]",args[1].toInt32());
                                console.log("args[2]",args[2]);
                                console.log("args[2]",args[2].toInt32());
                                console.log("args[3]",args[3]);
                                console.log("args[3]",args[3].toInt32());
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                                console.log("retval:",retval);
                                // retval.replace(0x10);
                                // console.log("retval:",retval);
                                console.log("======================================================================");

                        }
                })
        }
}
function fast_crafting4(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN27KosovoConstructionComponent18OnInitConstructionEP22KosovoCo";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        console.log(so_name_str,' ',so_addr);
        console.log(fun_name_str,' ',fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log("======================================================================");
                                console.log("_ZN27KosovoConstructionComponent18OnInitConstructionEP22KosovoCo");
                                console.log("args[0]",args[0]);
                                console.log("args[1]",args[1]);
                                console.log("args[1]",args[1].toInt32());
                                console.log("args[2]",args[2]);
                                console.log("args[2]",args[2].toInt32());
                                console.log("args[3]",args[3]);
                                console.log("args[3]",args[3].toInt32());
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                                console.log("retval:",retval);
                                // retval.replace(0x10);
                                // console.log("retval:",retval);
                                console.log("======================================================================");

                        }
                })
        }
}

function fast_crafting5(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN23KosovoCraftingComponent8OnUpdateEf";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        console.log(so_name_str,' ',so_addr);
        console.log(fun_name_str,' ',fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log("======================================================================");
                                console.log("_ZN23KosovoCraftingComponent8OnUpdateEf");
                                console.log("args[0]",args[0]);
                                console.log("args[1]",args[1]);
                                // args[1] = ptr(0x3f800000);
                                console.log("args[1]",args[1].toInt32());
                                console.log("args[2]",args[2]);
                                console.log("args[2]",args[2].toInt32());
                                console.log("args[3]",args[3]);
                                console.log("args[3]",args[3].toInt32());
                                console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        },
                        onLeave:function(retval){
                                console.log("onLeave");
                                console.log("retval:",retval);
                                // retval.replace(0x10);
                                // console.log("retval:",retval);
                                console.log("======================================================================");

                        }
                })
        }
}

function call_add(){
        get_container();
        get_namestring();
        console.log("KosovoInventoryContainer_this",KosovoInventoryContainer_this);
        console.log("NameString_this",NameString_this);
        var so_name_str = "libAndroidGame.so";
        var add_fun_str = "_ZN24KosovoInventoryContainer3AddERK10NameStringi";
        var add_fun_addr = Module.findExportByName(so_name_str,add_fun_str);
        // console.log("call_native_fun_addr:",call_native_fun_addr);
        var add = new NativeFunction(add_fun_addr , 'int', ['pointer','pointer','int']);
        if(KosovoInventoryContainer_this != null && NameString != null){
                add(KosovoInventoryContainer_this,NameString,1);
                add(KosovoInventoryContainer_this,NameString,1);
                add(KosovoInventoryContainer_this,NameString,1);
                add(KosovoInventoryContainer_this,NameString,1);
                add(KosovoInventoryContainer_this,NameString,1);
        }
        
}

function call_namestring(){
        var namestring_fun_str = "_ZN10NameStringC2EPKc";
        var namestring_fun_addr = Module.findExportByName(so_name_str,call_native_fun_str);
        // console.log("call_native_fun_addr:",call_native_fun_addr);
        var fun = new NativeFunction(namestring_fun_addr , 'void', ['pointer','pointer']);
        fun(NameString_this,);

        
}

function add(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN24KosovoInventoryContainer3AddERK10NameStringi";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        // var fun_addr = null;
        console.log("so_addr:",so_addr);
        console.log(fun_name_str," addr: ",fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log("======================================================================");
                                console.log(fun_name_str);
                                console.log("args[0]",args[0]);
                                console.log("args[1]",args[1]);
                                // console.log("args[2]",args[2]); 
                                var call_native_fun_str = "_ZN24KosovoInventoryContainer3AddERK10NameStringi";
                                var call_native_fun_addr = Module.findExportByName(so_name_str,call_native_fun_str);

                                var call_native_fun_str1 = "_ZN24KosovoInventoryContainer3AddERK10NameStringi";
                                var call_native_fun_addr1 = Module.findExportByName(so_name_str,call_native_fun_str);
                                // console.log("call_native_fun_addr:",call_native_fun_addr);
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
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
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
                                console.log(fun_name_str);
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
                                call_native_fun(args[0],args[1]);
                                call_native_fun(args[0],args[1]);
                                call_native_fun(args[0],args[1]);
                                call_native_fun(args[0],args[1]);
                                call_native_fun(args[0],args[1]);
                                call_native_fun(args[0],args[1]);
                                call_native_fun(args[0],args[1]);
                                call_native_fun(args[0],args[1]);
                                call_native_fun(args[0],args[1]);
                                call_native_fun(args[0],args[1]);
                                call_native_fun(args[0],args[1]);
                                call_native_fun(args[0],args[1]);
                                call_native_fun(args[0],args[1]);
                                call_native_fun(args[0],args[1]);
                                call_native_fun(args[0],args[1]);
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

function add_element1(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN22KosovoInventoryElement14AddNewElementsEi";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        // var fun_addr = null;
        console.log("so_addr:",so_addr);
        console.log(fun_name_str," addr: ",fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log("======================================================================");
                                console.log(fun_name_str);
                                console.log("args[0]",args[0]);
                                console.log("args[1]",args[1]);
                                // console.log("args[2]",args[2]); 
                                // var call_native_fun_str = "_ZN22KosovoInventoryElement10AddElementERK27KosovoInventoryElementEntry";
                                // var call_native_fun_addr = Module.findExportByName(so_name_str,call_native_fun_str);
                                // console.log("call_native_fun_addr:",call_native_fun_addr);
                                // var call_native_fun = new NativeFunction(call_native_fun_addr , 'int', ['pointer','pointer']);
                                // // var str_data="Materials";
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
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // call_native_fun(args[0],args[1]);
                                // // this.context.pc = endaddr;
                                // // console.log(JSON.stringify(this.context));
                                // console.log("args[0]",args[0]);
                                // // // console.log("args[0]",args[0].readInt());
                                // console.log("args[1]",args[1]);
                                // console.log("args[2]",args[2]);
                                // console.log("args[3]",args[3]);
                                // console.log("args[4]",args[4]);
                                // console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
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

function namestringset(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN10NameString3SetEPKc";
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
                                console.log("args[1]",args[1]);
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
                                console.log("retval:",retval);
                                // retval.replace(0x10);
                                // console.log("retval:",retval);
                                console.log("======================================================================");

                        }
                })
        }
}

function namestring1(){
        var so_name_str = "libAndroidGame.so";
        var fun_name_str = "_ZN10NameStringC2EPKc";
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
                                console.log("args[1]",args[1]);
                                console.log("args[1]",args[1].readCString());
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
                                console.log("retval:",retval);
                                // retval.replace(0x10);
                                // console.log("retval:",retval);
                                console.log("======================================================================");

                        }
                })
        }

}

function main(){
        add();
        // add_element();
        // add_element1();
        // namestring();
        // namestring1();
        // namestringset();

        // lock_time();
        // fast_crafting();
        // fast_crafting2();
        // fast_crafting3();
        // fast_crafting4();
        // fast_crafting5();
        // fast_crafting6();
        // crafting20();

}

setImmediate(main)