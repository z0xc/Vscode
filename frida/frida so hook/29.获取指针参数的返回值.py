# -*- coding: UTF-8 -*-
import frida, sys

jsCode = """

Java.perform(function(){
	
	var soAddr = Module.findBaseAddress("libhello.so");
	send('soAddr: ' + soAddr);
	var resultPtr = null;
	var MD5FinalAddr = soAddr.add(0x1768 + 1);
	send('MD5FinalAddr: ' + MD5FinalAddr);
	Interceptor.attach(MD5FinalAddr, {
		onEnter: function(args){
			send(args[0]);
			send(args[1]);
			resultPtr = args[1];
		},
		onLeave: function(retval){
			send(retval);
			var buffer = Memory.readByteArray(resultPtr, 16);
			console.log(hexdump(buffer, {
				offset: 0,
				length: 16,
				header: true,
				ansi: false
			}));
		}
	});
	
});

""";

def message(message, data):
    if message["type"] == 'send':
        print(u"[*] {0}".format(message['payload']))
    else:
        print(message)

process = frida.get_remote_device().attach("com.xiaojianbang.app")
script= process.create_script(jsCode)
script.on("message", message)
script.load()
sys.stdin.read()
