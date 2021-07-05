
function set_read_write_break()
{
	var soAddr = Module.findBaseAddress("libnative-lib.so");
	console.log(soAddr);
	console.log("set_read_write_break---------------------------------begin");
	Process.setExceptionHandler(function(exp) {
		console.log("ExceptionHandler");
		console.warn(JSON.stringify(exp));
		if (exp.memory.address == 0xB34E5010){
			console.log('address where the exception occurred: ' + exp.address);
			
			console.warn(JSON.stringify(Object.assign(exp, { _lr: DebugSymbol.fromAddress(exp.context.lr), _pc: DebugSymbol.fromAddress(exp.context.pc) }), null, 2));
		}
		
		Memory.protect(ptr('0xB34E5010'), 4, 'rw-');
		return true; 
	});
	Memory.protect(ptr('0xB34E5010'), 4, 'r-x'); console.log("set_read_write_break---------------------------------end"); }
function main(){
	console.log("main---------------------------------begin");
	set_read_write_break();
	console.log("main---------------------------------end");
}

setImmediate(main);
