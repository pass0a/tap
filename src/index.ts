import * as test from 'tape';
import * as fs from 'fs';
import * as mkdirp from 'mkdirp';

declare global {
	namespace NodeJS {
		interface Global {
			__coverage__: string;
		}
	}
}

test.onFinish(function() {
	fs.writeFile('.nyc_output/coverage.json', JSON.stringify(global['__coverage__']), function(err) {
		console.log('write err:', err);
	});
});
export { test };
