#!/usr/bin/env node
const mkdirp = require('mkdirp');
const cp = require('child_process');
const argv = require('minimist')(process.argv.slice(1));
mkdirp('.nyc_tmp', function(err) {
	if (err) console.error(err);
	else console.log('create ./tmp!');
});
mkdirp('.nyc_output', function(err) {
	if (err) console.error(err);
	else console.log('create .nyc_output!');
});
var src = argv.src ? argv.src : 'src';
cp.exec('nyc instrument ' + src + ' .nyc_tmp', function(code, out, err) {
	if (code) {
		console.log(code, out, err);
	}
});
