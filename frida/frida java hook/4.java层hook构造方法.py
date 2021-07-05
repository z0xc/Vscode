import frida, sys

jscode = """
Java.perform(function () {
	var utils = Java.use('com.xiaojianbang.app.Utils');
    utils.getCalc.implementation = function (a, b) {
        console.log("Hook Start...");
		send(arguments[0]);
		send(b);
        send("Success!");
		var num = this._getCalc(100, 200, 300);
		send(num);
		return num;
    }
	
	var money = Java.use('com.xiaojianbang.app.Money');
    money.$init.implementation = function (a, b) {
        console.log("Hook Start...");
		send(arguments[0]);
		send(b);
        send("Success!");
		return this.$init(10000, "美元");
    }

});
"""

def message(message, data):
    if message["type"] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)

process = frida.get_remote_device().attach('com.xiaojianbang.app')
script= process.create_script(jscode)
script.on("message", message)
script.load()
sys.stdin.read()
