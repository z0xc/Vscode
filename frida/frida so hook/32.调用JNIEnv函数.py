# -*- coding: UTF-8 -*-
import frida, sys

jsCode = """

Java.perform(function(){
	
	var nativePointer = Module.findExportByName("libhello.so", "Java_com_xiaojianbang_app_NativeHelper_helloFromC")
	send("native: " + nativePointer);
	Interceptor.attach(nativePointer, {
		onEnter: function(args){
			
		},
		onLeave: function(retval){
			var env = Java.vm.getEnv();
			var jstring = env.newStringUtf('xiaojianbang');
			send(jstring);
			retval.replace(jstring);
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
