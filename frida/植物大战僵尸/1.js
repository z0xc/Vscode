//需要用到的函数
function InsertString(t, c, n) {
        var r = new Array();
        for (var i = 0; i * 2 < t.length; i++) {
            r.push(t.substr(i * 2, n));
        }
        return r.join(c);
}
//需要用到的函数
function FillString(t, c, n, b) {
        if ((t == "") || (c.length != 1) || (n <= t.length)) {
            return t;
        }
        var l = t.length;
        for (var i = 0; i < n - l; i++) {
            if (b == true) {
                t = c + t;
            }
             else {
                t += c;
            }
        }
        return t;
}
//16进制转浮点数
function HexToSingle(t) {
        t = t.replace(/\s+/g, "");
        if (t == "") {
            return "";
        }
        if (t == "00000000") {
            return "0";
        }
        if ((t.length > 8) || (isNaN(parseInt(t, 16)))) {
            return "Error";
        }
        if (t.length < 8) {
            t = FillString(t, "0", 8, true);
        }
        t = parseInt(t, 16).toString(2);
        t = FillString(t, "0", 32, true);
        var s = t.substring(0, 1);
        var e = t.substring(1, 9);
        var m = t.substring(9);
        e = parseInt(e, 2) - 127;
        m = "1" + m;
        if (e >= 0) {
            m = m.substr(0, e + 1) + "." + m.substring(e + 1)
        }
         else {
            m = "0." + FillString(m, "0", m.length - e - 1, true)
        }
        if (m.indexOf(".") == -1) {
            m = m + ".0";
        }
        var a = m.split(".");
        var mi = parseInt(a[0], 2);
        var mf = 0;
        for (var i = 0; i < a[1].length; i++) {
            mf += parseFloat(a[1].charAt(i)) * Math.pow(2, -(i + 1));
        }
        m = parseInt(mi) + parseFloat(mf);
        if (s == 1) {
            m = 0 - m;
        }
        return m;
}
//浮点数转16进制
function SingleToHex(t) {
        if (t == "") {
            return "";
        }
        t = parseFloat(t);
        if (isNaN(t) == true) {
            return "Error";
        }
        if (t == 0) {
            return "00000000";
        }
        var s,
        e,
        m;
        if (t > 0) {
            s = 0;
        }
         else {
            s = 1;
            t = 0 - t;
        }
        m = t.toString(2);
        if (m >= 1) {
            if (m.indexOf(".") == -1) {
                m = m + ".0";
            }
            e = m.indexOf(".") - 1;
        }
         else {
            e = 1 - m.indexOf("1");
        }
        if (e >= 0) {
            m = m.replace(".", "");
        }
         else {
            m = m.substring(m.indexOf("1"));
        }
        if (m.length > 24) {
            m = m.substr(0, 24);
        }
         else {
            m = FillString(m, "0", 24, false)
        }
        m = m.substring(1);
        e = (e + 127).toString(2);
        e = FillString(e, "0", 8, true);
        var r = parseInt(s + e + m, 2).toString(16);
        r = FillString(r, "0", 8, true);
        return InsertString(r, " ", 2).toUpperCase();
}

function test(){
        var so_name_str = "libpvz.so";
        var fun_name_str = "";
        var so_addr = Module.findBaseAddress(so_name_str);
        var fun_addr = so_addr.add(0x003194A0);
        console.log(so_name_str,':',so_addr);
        console.log(fun_name_str,fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                console.log(JSON.stringify(this.context));
                                this.context.r2 = 0x1000;
                                console.log(this.context.r2);
                                // console.log(HexToSingle(args[0]));
                        },
                        onLeave:function(retval){
                                // console.log("onLeave");
                                // console.log("retval:",retval);
                        }
                })
        }
}

function main(){
        test();
}

setImmediate(main)