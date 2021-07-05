//hook普通函数与修改函数参数返回值
function hookTest1(){
    Java.perform(function(){
        var Utils = Java.use('com.xiaojianbang.app.Utils');
        Utils.getCalc.implementation = function(a, b){
            console.log('getCalc: ', a, b);
            var money = Java.use("com.xiaojianbang.app.Money");
            var infoStr = money.$new('RMB', 1000).getInfo();    //对象实例化
            console.log('infoStr: ', infoStr);
            a = 2000;
            b = 3000;
            var retval = this.getCalc(a, b);
            console.log('retval: ', retval);
            return 4000;
        }
    });
}

//Hook构造函数以及重载函数的HOOK
function hookTest2(){
    Java.perform(function(){
        var money = Java.use("com.xiaojianbang.app.Money");
        money.$init.overload('java.lang.String', 'int').implementation = function(str, num){
            console.log(str, num);
            str = "欧元";
            num = 2000;
            this.$init(str, num);
        }
    });
}

hookTest1();
hookTest2();

console.log('xiaojianbang');
