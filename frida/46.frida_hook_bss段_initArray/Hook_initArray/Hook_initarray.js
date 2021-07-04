

function hook_dlopen(){
    var dlopen = Module.findExportByName(null, "dlopen");
    console.log(dlopen);
    if(dlopen != null){
        Interceptor.attach(dlopen,{
            onEnter: function(args){
                var soName = args[0].readCString();
                console.log(soName);
                if(soName.indexOf("libxiaojianbangA.so") != -1){
                    hook_initarray();
                }
            },
            onLeave: function(retval){

            }
        });
    }

    var android_dlopen_ext = Module.findExportByName(null, "android_dlopen_ext");
    console.log(android_dlopen_ext);
    if(android_dlopen_ext != null){
        Interceptor.attach(android_dlopen_ext,{
            onEnter: function(args){
                var soName = args[0].readCString();
                console.log(soName);
                if(soName.indexOf("libxiaojianbangA.so") != -1){
                    hook_initarray();
                }
            },
            onLeave: function(retval){

            }
        });
    }

}

var hooked = false;

function hook_initarray(){

    var call_constructorsAddr = null;
    var linkerSymbols = Module.enumerateSymbolsSync("linker64");
    for(var i =0; i< linkerSymbols.length; i++){
        if(linkerSymbols[i].name == "__dl__ZN6soinfo17call_constructorsEv"){
            call_constructorsAddr = linkerSymbols[i].address;
            console.log(linkerSymbols[i].name, linkerSymbols[i].address);
        }
            
    }

    
        Interceptor.attach(call_constructorsAddr, {
            onEnter: function(args){
                if(!hooked){
                    var soAddr = Module.findBaseAddress("libxiaojianbangA.so");
                    var initArrayTest2 = soAddr.add(0x2B08);
                    var initArrayTest1 = soAddr.add(0x2AD8);
        
                    // Interceptor.attach(initArrayTest2, {
                    //     onEnter: function(args){
                    //         console.log("initArrayTest2 is called");
                    //     },
                    //     onLeave: function(retval){
        
                    //     }
                    // });

                    Interceptor.replace(initArrayTest2, new NativeCallback(function(a){}, "int", ['int']));
                    Interceptor.replace(initArrayTest1, new NativeCallback(function(a){}, "int", ['int']));
                    hooked = true;
                }
            },
            onLeave: function(retval){
    
            }
        });
    
    

}

function main(){
    hook_dlopen();
}

setImmediate(main);