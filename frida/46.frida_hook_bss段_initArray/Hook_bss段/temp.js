
var realFunc = null;

function hook_so(){
    var soAddr = Module.findBaseAddress("libxiaojianbangA.so");
    var bssFunc = soAddr.add(0x14018);
    console.log("bssFunc: ", hexdump(bssFunc));
    realFunc = bssFunc.readPointer();
    console.log("realFunc: ", hexdump(realFunc));
    Interceptor.attach(realFunc, {
        onEnter: function(args){
            console.log("realFunc args[0]: ", hexdump(args[0]));
        },
        onLeave: function(retval){

        }
    });
}

function call_so(){
    var fromSoB = new NativeFunction(realFunc, "void", ['pointer']);
    var param = Memory.allocUtf8String("bbs.125.la");
    fromSoB(param);
}


function main(){
    hook_so();
}

setImmediate(main);
