function hexToSingle(num){
	var a = num;
	var b = parseInt(a,16);
	var s = b&0x80000000/0x80000000;
	var e = (b&0x7f800000)/0x800000-127;
	var c = (b&0x7fffff)/0x800000;
	var re = Math.pow(-1,s)*(1+c)*Math.pow(2,e);
	return re;
}
console.log(hexToSingle(0x42a0774c));
