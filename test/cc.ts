declare var Duktape: any;
export function add(a: number, b: number) {
	console.log('log:', Duktape.version);
	return a + b;
}
