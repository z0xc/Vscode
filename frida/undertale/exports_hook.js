function exportshook(){
        // var soAddr = Module.findBaseAddress("libyoyo.so");
        // console.log(soAddr);
        // GET_RValue		
        // var funAddr = Module.findExportByName("libyoyo.so", "_Z10GET_RValueP6RValueS0_i");
        var funAddr = Module.findExportByName("libyoyo.so", "_Z10SET_RValueP6RValueS0_i");
        console.log("funAddr:",funAddr);
        if(funAddr != null){
                Interceptor.attach(funAddr, {
                        onEnter: function(args){
                                if(args[0] == 0x9DC031E0 || args[1] == 0x9DC031E0){
                                        console.log("args0",args[0]);
                                        var p1 = ptr(args[0]);
                                        console.log("args0 值",p1.readDouble());

                                    
                                        console.log("args1",args[1]);
                                        var p2 = ptr(args[1]);
                                        console.log("args1 值",p2.readDouble());

                                        console.log("args2",args[2]);
                                        var p3 = ptr(args[2]);
                                        console.log("args2 值",p3.readInt());
                                        console.log("====================================================================------------------------------------");
                                        p2.writeDouble(p1.readDouble());  //锁血
                                        // console.log(args[3].toInt32());
                                        // console.log(args[4].toInt32());
                                }
                        
                        },
                        onLeave: function(retval){
                                // if(retval == 0x9DC031E0 ){
                                //         console.log("retval:",retval);
                                //         var p4 = ptr(retval);
                                //         console.log("retval 值",p4.readDouble());
                                // }
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