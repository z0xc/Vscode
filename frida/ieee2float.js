function hexToSingle(){
var a = "BE991597"; 
var b = parseInt(a,16); 
var s = b&0x80000000/0x80000000; 
var e = (b&0x7f800000)/0x800000-127; 
var c = (b&0x7fffff)/0x800000; 
var re = Math.pow(-1,s)*(1+c)*Math.pow(2,e); 
document.write(re.toString(10));
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
                                call_native_fun(args[0],args[1],args[2]);//主动调用so函数
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
// var a = ptr(0x3f800000);
// function hexToSingle(num){
//         var num = num.toString(16);
// 	var a = num;
// 	var b = parseInt(a,16);
// 	var s = b&0x80000000/0x80000000;
// 	var e = (b&0x7f800000)/0x800000-127;
// 	var c = (b&0x7fffff)/0x800000;
// 	var re = Math.pow(-1,s)*(1+c)*Math.pow(2,e);
// 	return re;
// }

// hexToSingle(a);





function hexToSingle(num){
	var a = num;
	var b = parseInt(a,16);
	var s = b&0x80000000/0x80000000;
	var e = (b&0x7f800000)/0x800000-127;
	var c = (b&0x7fffff)/0x800000;
	var re = Math.pow(-1,s)*(1+c)*Math.pow(2,e);
	return re;
}
console.log(hexToSingle('3f800000'));
