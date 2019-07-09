import * as test from 'tape';
import * as fs from 'fs';

declare global {
	namespace NodeJS {
		interface Global {
			__coverage__: string;
		}
	}
}

test.onFinish(function() {
	var val = JSON.stringify(global['__coverage__']);
	fs.writeFileSync('.nyc_output/coverage.json', val ? val : '');
	// fs.writeFile('.nyc_output/coverage.json', val ? val : '', function(err) {
	// if (err) {
	// console.log('write err:', err);
	// }
	// });
});
export { test };
