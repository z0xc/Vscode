
Java.perform(function(){

    // var RequestUtil = Java.use('com.dodonew.online.http.RequestUtil');
    // RequestUtil.encodeDesMap.overload('java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function(a, b, c){
    //     console.log('data: ', a);
    //     console.log('desKey: ', b);
    //     console.log('desIV: ', c);
    //     var retval = this.encodeDesMap(a, b, c);
    //     console.log('retval: ', retval);
    //     return retval;
    // }

    // var Utils = Java.use('com.dodonew.online.util.Utils');
    // Utils.md5.implementation = function(a){
    //     console.log('MD5 string: ', a);
    //     var retval = this.md5(a);
    //     console.log('retval: ', retval);
    //     return retval;
    // }

    // function showStacks(){
    //     //var stack = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new());
    //     var stack = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new());
    //     console.log(stack);
    // }

    function showStacks(){
        var log = Java.use('android.util.Log');
        var throwable = Java.use("java.lang.Throwable");
        log.d('xiaojianbang', 'Stack Dump', throwable.$new());
    }

    var ArrayList = Java.use('java.util.ArrayList');
    ArrayList.add.overload('java.lang.Object').implementation = function(a){
        showStacks();
        if(a == 'username'){ console.log('ArrayList: ', a); }
        //if(a == '15968079477'){console.log('ArrayList: ', a);}
        //console.log('ArrayList: ', a);
        return this.add(a);
    }
    ArrayList.add.overload('int', 'java.lang.Object').implementation = function(a, b){
        showStacks();
        if(b == 'username'){ console.log('ArrayList: ', b); }
        //if(b == '15968079477'){console.log('ArrayList: ', b);}
        //console.log('ArrayList: ', a, b);
        return this.add(a, b);
    }

    // var HashMap = Java.use('java.util.HashMap');
    // HashMap.put.implementation = function(a, b){
    //     if(a == 'username'){
    //         showStacks();
    //         console.log('HashMap: ', a, b);
    //     }
    //     return this.put(a, b);
    // }

    console.log('xiaojianbang');

});
