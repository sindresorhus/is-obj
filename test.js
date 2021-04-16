import test from 'ava';
import isObject from './index.js';

test('main', t => {
	/* eslint-disable no-new-object */
	t.true(isObject({}));
	t.true(isObject(new Object()));
	t.true(isObject(new Date()));
	t.true(isObject(new RegExp()));
	t.true(isObject(Object.create(null)));
	t.true(isObject({foo: true}));
	t.true(isObject([]));
	t.true(isObject(['foo', 'bar']));
	t.true(isObject(() => {}));
	t.true(isObject(/./));
	t.true(isObject(new Object(0)));
	t.true(isObject(new Object('foo')));
	t.true(isObject(new Object(false)));
	t.false(isObject(null));
	t.false(isObject(undefined));
	t.false(isObject(Number.NaN));
	t.false(isObject(''));
	t.false(isObject(0));
	t.false(isObject(false));
	/* eslint-enable no-new-object */
});
