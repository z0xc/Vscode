function exportshook(){
        // var soAddr = Module.findBaseAddress("libyoyo.so");
        // console.log(soAddr);
        // GET_RValue		
        var funAddr = Module.findExportByName("libyoyo.so", "_Z10GET_RValueP6RValueS0_i");
        console.log("funAddr:",funAddr);
        if(funAddr != null){
                Interceptor.attach(funAddr, {
                        onEnter: function(args){
                                if(args[0] == 0x99A371E0 || args[1] == 0x99A371E0){
                                    console.log(args[0]);
                                    console.log(args[1]);
                                    console.log(args[2].toInt32());
                                    // console.log(args[3].toInt32());
                                    // console.log(args[4].toInt32());
                        }
                },
                        onLeave: function(retval){
                                // console.log(retval.toInt32());
                                console.log(retval);
                        }
                });
        }
}

function main(){
       	console.log("main---------------------------------begin");
	exportshook();
	console.log("main---------------------------------end");

}
setImmediate(main)