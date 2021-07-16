

function hook_so(){
    var soAddr = Module.findBaseAddress("libxiaojianbangA.so");
    var bssFunc = soAddr.add(0x14018);
    //console.log("bssFunc: ", hexdump(bssFunc));
    var realFunc = bssFunc.readPointer();
    Interceptor.attach(realFunc, {
        onEnter: function(args){
            //console.log("realFunc args[0]: ", hexdump(args[0]));
        },
        onLeave: function(retval){

        }
    });

    var modules = Process.enumerateModules();
    //console.log(JSON.stringify(modules[0]));
    for(var i = 0; i < modules.length; i++){
        if(realFunc > parseInt(modules[i].base) && realFunc < (parseInt(modules[i].base) + modules[i].size)){
            var realFuncOffset = realFunc - parseInt(modules[i].base);
            console.log("modules[i].name: ", modules[i].name, realFuncOffset.toString(16));
        }
    }

    




}

function main(){
    hook_so();
}

setImmediate(main);
