import test from 'ava';
import isObj from '.';

test('main', function (t) {
	/* eslint-disable no-new-object */
	t.true(isObj({}));
	t.true(isObj(new Object()));
	t.true(isObj(new Date()));
	t.true(isObj(new RegExp()));
	t.true(isObj(Object.create(null)));
	t.true(isObj({foo: true}));
	t.true(isObj([]));
	t.true(isObj(['foo', 'bar']));
	t.true(isObj(() => {}));
	t.true(isObj(arguments)); // eslint-disable-line prefer-rest-params
	t.true(isObj(/./));
	t.true(isObj(new Object(0)));
	t.true(isObj(new Object('foo')));
	t.true(isObj(new Object(false)));
	t.false(isObj(null));
	t.false(isObj(undefined));
	t.false(isObj(NaN));
	t.false(isObj(''));
	t.false(isObj(0));
	t.false(isObj(false));
	/* eslint-enable no-new-object */
});
