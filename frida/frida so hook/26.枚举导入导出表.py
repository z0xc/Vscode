# -*- coding: UTF-8 -*-
import frida, sys

jsCode = """

Java.perform(function(){
	
	var imports = Module.enumerateImportsSync("libhello.so");
	for(i = 0; i < imports.length; i++) {
		if(imports[i].name == 'strncat'){
			send(imports[i].name + ": " + imports[i].address);
			break;
		}
	}
	
	var exports = Module.enumerateExportsSync("libhello.so");
	for(i = 0; i < exports.length; i++) {
		if(exports[i].name.indexOf('add') != -1){
			send(exports[i].name + ": " + exports[i].address);
			break;
		}
	}
	
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
