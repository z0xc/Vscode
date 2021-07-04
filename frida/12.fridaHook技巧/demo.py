# -*- coding: UTF-8 -*-
import frida, sys


jsCode = """


Java.perform(function(){

    var RequestUtil = Java.use('com.dodonew.online.http.RequestUtil');
    RequestUtil.encodeDesMap.overload('java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function(a, b, c){
        console.log('data: ', a);
        console.log('desKey: ', b);
        console.log('desIV: ', c);
        var retval = this.encodeDesMap(a, b, c);
        console.log('retval: ', retval);
        return retval;
    }

    var Utils = Java.use('com.dodonew.online.util.Utils');
    Utils.md5.implementation = function(a){
        console.log('MD5 string: ', a);
        var retval = this.md5(a);
        console.log('retval: ', retval);
        return retval;
    }
    
});




""";


#def message(message, data):
#    if message["type"] == 'send':
#        print(u"[*] {0}".format(message['payload']))
#    else:
#        print(message)

#process = frida.get_usb_device().attach(27082)
#process = frida.get_remote_device().attach('com.dodonew.online')
process1 = frida.get_device_manager().add_remote_device('192.168.1.11:9999').attach('com.dodonew.online')
process2 = frida.get_device_manager().add_remote_device('127.0.0.1:6666').attach('com.dodonew.online')
script1 = process1.create_script(jsCode)
script2 = process2.create_script(jsCode)
#script.on("message", message)

script1.load()
script2.load()

print("开始运行");

sys.stdin.read()
