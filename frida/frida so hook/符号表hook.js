function intercept(address) {
        try {
            Interceptor.attach(address, {
                onEnter: function(args) {
                    console.log("onEnter", address);
                },
                onLeave: function(ignored) {}
            });
        } catch (e) {
            console.error(e);
        }
    }
    function Main() {
        var dlopen = new NativeFunction(Module.findExportByName(null, 'dlopen'), 'pointer', ['pointer', 'int']);
        var dlsym = new NativeFunction(Module.findExportByName(null, 'dlsym'), 'pointer', ['pointer', 'pointer']);
        Process.enumerateModulesSync().forEach(function(m) {
            if (m.name === "libfoo.so") {
                console.log("Module", JSON.stringify(m));
                var handle = dlopen(Memory.allocUtf8String(m.path), 1);
                var symb = Memory.allocUtf8String("foo");
                var exports = Module.enumerateExportsSync(m.name);
                console.log(JSON.stringify({
                    handle: handle,
                    symb: symb,
                    dlsym: dlsym(handle, symb),
                    exports: exports.map(function(ex){ return ex.address + ": " + ex.name })
                }, null, 2));
                // intercept all exports
                exports.forEach(function(ex){
                    intercept(ex.address);
                });
                // explicit intercept foo by known offset
                intercept(m.base.add(0x22334)); // this outputs "Error: unable to intercept function at 0x86c96328; please file a bug"
            }
        });
     
        console.log("sleep..");
        Thread.sleep(1.5);
        console.log("invoke", Java.use('com.clazz.foo').signToken("A".repeat(32)));
    }
    Java.perform(Main);
     