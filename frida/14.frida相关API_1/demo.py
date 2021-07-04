import frida, sys

jscode = """

function hookTest1(){
    Java.perform(function(){
        var Utils = Java.use('com.xiaojianbang.app.Utils');
        Utils.getCalc.implementation = function(a, b){
            console.log('getCalc: ', a, b);
            var retval = this.getCalc(a, b);
            console.log('retval: ', retval);
            return 4000;
        }
    
    });
}
hookTest1();

"""

rdev = frida.get_usb_device()
pid = rdev.spawn(["com.xiaojianbang.app"])    #已挂起方式创建进程
print(pid)
process = rdev.attach(pid)                  #附加到该进程
script = process.create_script(jscode)
script.load()
rdev.resume(pid)            #创建完脚本, 恢复进程运行
sys.stdin.read()
