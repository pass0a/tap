import { test } from '../src/index';
const xx = require('./cc');
test('base.test', function(t: test.Test) {
	t.plan(1);
	t.equal(xx.add(0.5, 0.5), 1, '????');
});
