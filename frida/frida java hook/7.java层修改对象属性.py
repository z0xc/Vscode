import frida, sys

jscode = """

Java.perform(function () {
	var utils = Java.use('com.xiaojianbang.app.Utils');
	var money = Java.use('com.xiaojianbang.app.Money');
	var clazz = Java.use('java.lang.Class');
    utils.test.overload('com.xiaojianbang.app.Money').implementation = function (obj) {
        send("Hook Start...");
		var mon = money.$new(2000,'港币');
		send(mon.getInfo());
		var numid = Java.cast(mon.getClass(),clazz).getDeclaredField('num');
		numid.setAccessible(true);
		var value = numid.get(mon);
		console.log(value);
		send(value);
		numid.setInt(mon, 3000);
		return this.test(mon);
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
