// import '../hex_single'
// import * as hex2single from '../hex_single';
// //Global_var
// var charpp;
// var charp;
// var KosovoInventoryContainer_this;
// KosovoInventoryContainer_this = Module.findExportByName("libAndroidGame.so","gKosovoGlobalState").add(64);
// console.log(KosovoInventoryContainer_this);
// // KosovoInventoryContainer_this = ptr(KosovoInventoryContainer_this).add(64);
// charpp = Memory.alloc(8);
// charp = Memory.allocUtf8String("CannedFood");
// charpp = ptr(charpp);
// charp = ptr(charp);
// charpp.writePointer(charp);

// import { HexToSingle } from '../hex_single.js';

// import { HexToSingle } from '../hex_single.js';

//call fun
function call_add(){
        // MemoryAccessMonitor.enable(,)
        var charpp;
        var charp;
        var KosovoInventoryContainer_this;
        KosovoInventoryContainer_this = Module.findExportByName("libAndroidGame.so","gKosovoGlobalState").add(64);
        console.log(KosovoInventoryContainer_this);
        // KosovoInventoryContainer_this = ptr(KosovoInventoryContainer_this).add(64);
        charpp = Memory.alloc(8);
        charp = Memory.allocUtf8String("Vegetables");
        call_namestring(charpp,charp);
        KosovoInventoryContainer_this = ptr(KosovoInventoryContainer_this);
        console.log("KosovoInventoryContainer_this:",KosovoInventoryContainer_this);
        console.log("charpp:",ptr(charpp).readPointer().readCString());
        // console.log("NameString_this",NameString_this);
        var so_name_str = "libAndroidGame.so";
        var add_fun_str = "_ZN24KosovoInventoryContainer3AddERK10NameStringi";
        var add_fun_addr = Module.findExportByName(so_name_str,add_fun_str);
        var add = new NativeFunction(add_fun_addr , 'int', ['pointer','pointer','int']);
        if(KosovoInventoryContainer_this != null   ){
                add(ptr(KosovoInventoryContainer_this),charpp,10);
        }
}

function call_addelement(){
        var charpp;
        var charp;
        var KosovoInventoryContainer_this;
        KosovoInventoryContainer_this = Module.findExportByName("libAndroidGame.so","gKosovoGlobalState").add(64);
        console.log(KosovoInventoryContainer_this);
        // KosovoInventoryContainer_this = ptr(KosovoInventoryContainer_this).add(64);
        charpp = Memory.alloc(8);
        charp = Memory.allocUtf8String("Vegetables");
        call_namestring(charpp,charp);
        KosovoInventoryContainer_this = ptr(KosovoInventoryContainer_this);
        console.log("KosovoInventoryContainer_this:",KosovoInventoryContainer_this);
        console.log("charpp:",ptr(charpp).readPointer().readCString());
        // console.log("NameString_this",NameString_this);
        var so_name_str = "libAndroidGame.so";
        var add_fun_str = "_ZN24KosovoInventoryContainer3AddERK10NameStringi";
        var add_fun_addr = Module.findExportByName(so_name_str,add_fun_str);
        var add = new NativeFunction(add_fun_addr , 'int', ['pointer','pointer','int']);
        if(KosovoInventoryContainer_this != null   ){
                add(ptr(KosovoInventoryContainer_this),charpp,10);
        }
}

function call_namestring(charpp,charp){
        var so_name_str = "libAndroidGame.so";
        var namestring_fun_str = "_ZN10NameStringC2EPKc";
        var namestring_fun_addr = Module.findExportByName(so_name_str,namestring_fun_str);
        // console.log("call_native_fun_addr:",call_native_fun_addr);
        var namestring = new NativeFunction(namestring_fun_addr , 'void', ['pointer','pointer']);
        // var charp = Memory.allocUtf8String("Wood");
        namestring(charpp,charp);
        console.log("charpp",charpp);
        console.log("charp",charp);
}

function lock_time(){
        var so_name_str = "libAndroidGame.so";
        // import {SingleToHex,HexToSingle} from '../hex_single';
        var fun_name_str = "_ZN21KosovoCurrentDateTime11SetProgressEf";
        var so_addr = Module.findBaseAddress(so_name_str);
        // var fun_addr = so_addr.add(0x0000000001CE3818);
        var fun_addr = Module.findExportByName(so_name_str,fun_name_str);
        // var fun_addr = null;
        // console.log("so_addr:",so_addr);
        // console.log(fun_name_str," addr: ",fun_addr);
        if(fun_addr != null){
                Interceptor.attach(fun_addr,{
                        onEnter:function(args){
                                // console.log(JSON.stringify(this.context));
                                // console.log("so_addr:",so_addr);
                                // this.context.pc = 0xc3c721f0;
                                // console.log(this.context.pc);
                        // if(args[1] == 0x3f800000){
                                // console.log("args[0]",args[0]);
                                // console.log("args[0]",args[0].readInt());
                                // console.log("args[1]",args[1]);
                                // import('../hex_single.js').then((module)=>{
                                //         console.log(1111111);
                                //         console.log(module.HexToSingle(args[1]));
                                // });
                                console.log("args[1]",args[1]);
                                console.log("args[1]",HexToSingle(args[1]));
                                // console.log(hexToSingle(args[1]));
                                // args[1] = ptr(0x3f8000000);
                                // console.warn(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                        // }
                        },
                        onLeave:function(retval){
                                // console.log("onLeave");
                                // console.log("retval:",retval);
                                // retval.replace(0x0);
                        }
                        
                        
                })
        }

}



function main(){
        lock_time();
}

setImmediate(main)


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