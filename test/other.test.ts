const math = require('./math');
import { test } from '../src/index';
test('base.test', function(t: test.Test) {
	t.plan(1);
	t.equal(math.add(1, 1), 2, 'math.add');
});
