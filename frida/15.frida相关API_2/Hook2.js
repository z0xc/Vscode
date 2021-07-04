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

//Hook方法的所有重载
function hookTest3(){
    Java.perform(function(){
        var utils = Java.use("com.xiaojianbang.app.Utils");
        //console.log(utils.test.overloads.length);
        for(var i = 0; i < utils.test.overloads.length; i++){
            utils.test.overloads[i].implementation = function(){
                //console.log(JSON.stringify(arguments));
                if(arguments.length == 0){
                    //console.log('没有参数', JSON.stringify(arguments));
                    return "调用了没有参数的";
                }else if(arguments.length == 1){
                    if(JSON.stringify(arguments).indexOf("Money") != -1){
                        //console.log('调用了Money参数的', JSON.stringify(arguments));
                        return "调用了Money参数的";
                    }else{
                        //console.log('调用了int参数的', JSON.stringify(arguments));
                        return "调用了int参数的";
                    }
                }
            }
        }
    });
}

//修改类的字段
function hookTest5(){
    Java.perform(function(){
        //静态字段的修改
        var money = Java.use("com.xiaojianbang.app.Money");
        money.flag.value = "xiaojianbang";
        console.log(money.flag.value);

        //非静态字段的修改
        Java.choose("com.xiaojianbang.app.Money", {
            onMatch: function(obj){
                obj._name.value = "ouyuan"; //字段名与函数名相同 前面加个下划线
                obj.num.value = 888;
            },
            onComplete: function(){

            }
        });
    });
}

//Hook内部类与匿名类
function hookTest6(){
    Java.perform(function(){
        var innerClass = Java.use("com.xiaojianbang.app.Money$innerClass");
        //console.log(innerClass);
        innerClass.$init.implementation = function(a, b){
            a = "jingyi";
            b = 666;
            return this.$init(a, b);
        }

        var xxx = Java.use("com.xiaojianbang.app.MainActivity$1");
        //console.log(xxx);
        xxx.getInfo.implementation = function(){
            return "匿名类被Hook了"
        }

    });
}

//hookTest6();
//函数参数为对象的构造与修改
function hookTest7(){
    Java.perform(function(){
        var Utils = Java.use('com.xiaojianbang.app.Utils');
        var retval = Utils.test();
        console.log(retval);

        retval = Utils.test(666);
        console.log(retval);

        var Money = Java.use('com.xiaojianbang.app.Money');
        retval = Utils.test( Money.$new('xiaojianbang', 888) );
        console.log(retval);
    });
}

//枚举已加载的所有类与枚举类的所有方法
function hookTest7(){
    Java.perform(function(){

        // Java.enumerateLoadedClasses({
        //     onMatch: function(name, handle){
        //         if(name.indexOf("com.xiaojianbang.app") != -1){
        //             console.log(name);
        //             var clazz = Java.use(name);
        //             console.log(clazz);
        //             var methods = clazz.class.getDeclaredMethods();
                    
        //             for(var i = 0; i < methods.length; i++){
        //                 console.log(methods[i]);
        //             }

        //         }
                
        //     },
        //     onComplete: function(){

        //     }
        // });

        var classes = Java.enumerateLoadedClassesSync();
        for(var i = 0; i < classes.length; i++){
            if(classes[i].indexOf("com.xiaojianbang.app") != -1){
                console.log(classes[i]);
                var clazz = Java.use(classes[i]);
                var methods = clazz.class.getDeclaredMethods();
                for(var j = 0; j < methods.length; j++){
                    console.log(methods[j]);
                }
            }
        }
    });
}


//1.类的字节码 Java反射
//  Class.forName('com.xiaojianbang.app.xxxx')
//  obj.getClass
//  xxxx.class

//Hook类的所有方法
function hookTest8(){

    function hookAll(md5, methodName){
        for(var k = 0; k < md5[methodName].overloads.length; k++){
            md5[methodName].overloads[k].implementation = function(){
                for(var i = 0; i < arguments.length; i++){
                    console.log(arguments[i]);
                }
                console.log(methodName);
                return this[methodName].apply(this, arguments);
            }
        }
    }

    Java.perform(function(){
        var md5 = Java.use("com.xiaojianbang.app.MD5");
        var methods = md5.class.getDeclaredMethods();
        for(var j = 0; j < methods.length; j++){
            var methodName = methods[j].getName();
            console.log(methodName);
            hookAll(md5, methodName)
        }
    });

}

//Hook动态加载的dex
function hookTest9(){
    Java.perform(function(){
        //安卓7.0以上才可以用
        Java.enumerateClassLoaders({
            onMatch: function(loader){
                try {
                    if(loader.loadClass("com.xiaojianbang.app.Dynamic")){
                        Java.classFactory.loader = loader;
                        var Dynamic = Java.use("com.xiaojianbang.app.Dynamic");
                        console.log(Dynamic);
                        Dynamic.sayHello.implementation = function(){
                            return "jingyi";
                        }
                    }  
                } catch (error) {
                    
                }
            }
            ,
            onComplete: function(){

            }
        });
    });
}

//java map类型的遍历与修改
function hookTest10(){
    Java.perform(function(){
        var ShufferMap = Java.use("com.xiaojianbang.app.ShufferMap");
        //console.log(ShufferMap);
        ShufferMap.show.implementation = function(map){
            //console.log(JSON.stringify(map));

            //Java map的遍历
            var key = map.keySet();
            var it = key.iterator();
            var result = "";
            while(it.hasNext()){
                var  keystr = it.next();
                var  valuestr = map.get(keystr);
                result += valuestr;
            }
            console.log(result);
            return result;

            // map.put("pass", "jingyi");
            // map.put("guanwang", "bbs.125.la");

            // var retval = this.show(map);
            // console.log(retval);
            // return retval;

        }
    });
}

function hookTest13(){
    Java.perform(function(){
        
        Java.openClassFile("/data/local/tmp/xiaojianbang.dex").load();
        var xiaojianbang = Java.use("com.xiaojianbang.test.xiaojianbang");

        var ShufferMap = Java.use("com.xiaojianbang.app.ShufferMap");
        ShufferMap.show.implementation = function(map){
            var retval = xiaojianbang.sayHello(map);
            console.log(retval);
            return retval;
        }

    });
}

function hookTest11(){
    Java.perform(function(){
        //静态方法的主动调用
        var str = Java.use("java.lang.String");
        var bytes = str.$new("xiaojianbang").getBytes();

        var rsa = Java.use("com.xiaojianbang.app.RSA");
        var retval = rsa.encrypt(bytes);

        var base64 = Java.use("android.util.Base64");
        var result = base64.encodeToString(retval, 0);
        console.log(result);

        //非静态方法的主动调用1 (新建一个对象去调用)
        var res = Java.use("com.xiaojianbang.app.Money").$new("日元", 300000).getInfo();
        console.log(res);

        var utils = Java.use("com.xiaojianbang.app.Utils");
        res = utils.$new().myPrint(["xiaojianbang", "is very good", " ", "jingyi", "is very good"]);
        console.log(res);

        //非静态方法的主动调用2 (获取已有的对象调用)
        Java.choose("com.xiaojianbang.app.Money",{
            onMatch: function(obj){
                if(obj._name.value == "日元"){
                    res = obj.getInfo();
                    console.log(res);
                }
            },
            onComplete: function(){

            }
        });

    });
}

hookTest11();


//console.log('xiaojianbang');
