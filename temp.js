//枚举导入导出表
function hookTest1(){
        // var imports = Module.enumerateImports("libxiaojianbang.so");
        // for(var i=0;i < imports.length;i++){
        //         console.log(JSON.stringify(imports[i]));
        //         // console.log(imports[i]);
        // }
        var imports = Module.enumerateImports("libxiaojianbang.so");
        for(var i = 0; i < imports.length; i++){
        //     if(imports[i].name == "strncat"){
                console.log(JSON.stringify(imports[i]));
                // console.log(imports[i].address);
                break;
        //     }
        }
}

function hookTest2(){
        var Addr = Module.findExportByName("libxiaojianbang.so","");

}
function main(){
        hookTest1();
        // hookTest2();
}
setImmediate(main);