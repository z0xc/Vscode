# -*- coding: UTF-8 -*-
import frida, sys

jsCode = """

Java.perform(function(){
	
	function hexToBytes(str) {
		var pos = 0;
		var len = str.length;
		if (len % 2 != 0) {
			return null;
		}
		len /= 2;
		var hexA = new Array();
		for (var i = 0; i < len; i++) {
			var s = str.substr(pos, 2);
			var v = parseInt(s, 16);
			hexA.push(v);
			pos += 2;
		}
		return hexA;
	}
	
	function stringToBytes(str) {  
        var ch, st, re = []; 
        for (var i = 0; i < str.length; i++ ) { 
            ch = str.charCodeAt(i);  
            st = [];                 
           do {  
                st.push( ch & 0xFF );  
                ch = ch >> 8;          
            }    
            while ( ch );  
            re = re.concat( st.reverse() ); 
        }  
        return re;  
    } 
	
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
			
			Memory.writeByteArray(resultPtr, stringToBytes('1234567890'));
			
			buffer = Memory.readByteArray(resultPtr, 32);
			console.log(hexdump(buffer, {
				offset: 0,
				length: 32,
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
