import frida
import sys
import io

device = frida.get_usb_device()

session = device.attach("com.popcap.pvz_na")

scr = """
function set_read_write_break()
{
	var soAddr = Module.findBaseAddress("libpvz.so");
    //console.log(soAddr);
	console.log("set_read_write_break---------------------------------begin");
	Process.setExceptionHandler(function(exp) {
		console.log("ExceptionHandler");
		if (exp.memory.address == 0xC0698B24){
			console.log('address where the exception occurred: ' + exp.address);
			
			console.warn(JSON.stringify(Object.assign(exp, { _lr: DebugSymbol.fromAddress(exp.context.lr), _pc: DebugSymbol.fromAddress(exp.context.pc) }), null, 2));
		}
		
		Memory.protect(ptr('0xC0698B24'), 4, 'rw-');
		return true; 
	});
	Memory.protect(ptr('0xC0698B24'), 4, 'r-x');
	console.log("set_read_write_break---------------------------------end");
}

function main(){
	console.log("main---------------------------------begin");
	set_read_write_break();
	console.log("main---------------------------------end");
}

setImmediate(main);
"""

def on_message(message ,data):
   print('on_message')


script = session.create_script(scr)
script.on("message" , on_message)
script.load()
sys.stdin.read()