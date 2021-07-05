# -*- coding: UTF-8 -*-
import frida, sys

jsCode = """

Java.perform(function(){
	
	var nativePointer = Module.findExportByName("libhello.so", "Java_com_xiaojianbang_app_NativeHelper_helloFromC");
	send("native: " + nativePointer);
	
	var soAddr = Module.findBaseAddress("libhello.so");
	send('soAddr: ' + soAddr);
	var helloFromCAddr = soAddr.add(0x1904 + 1);
	send('helloFromCAddr: ' + helloFromCAddr);
	Interceptor.attach(helloFromCAddr, {
		onEnter: function(args){
			
		},
		onLeave: function(retval){
			send("hellofromc返回的 " + retval);

		}
	});
	
	
	var env = Java.vm.getEnv();
	send(env);
	var handlePointer = Memory.readPointer(env.handle);
	send("env handle: " + handlePointer);
	var NewStringUTFPtr = Memory.readPointer(handlePointer.add(0x29C));
	send("NewStringUTFPtr addr: " + NewStringUTFPtr);
	Interceptor.attach(NewStringUTFPtr, {
		onEnter: function (args) {
			//send(Memory.readUtf8String(args[1]));
			send(Memory.readCString(args[1]));
			var buffer = Memory.readByteArray(args[1],16);
			console.log(hexdump(buffer, {
				offset: 0,
				length: 16,
				header: true,
				ansi: false
			}));
			
		},
		onLeave: function(retval){
			send("jni返回的：" + retval);
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
