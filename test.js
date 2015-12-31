import test from 'ava';
import m from './';

test(t => {
	t.true(m({}));
	t.true(m(new Object()));
	t.true(m(new Date()));
	t.true(m(new RegExp()));
	t.true(m(Object.create(null)));
	t.true(m({foo: true}));
	t.true(m([]));
	t.true(m(['foo', 'bar']));
	t.true(m(() => {}));
	t.true(m(arguments));
	t.true(m(/./));
	t.true(m(Object(0)));
	t.true(m(Object('foo')));
	t.true(m(Object(false)));
	t.false(m(null));
	t.false(m(undefined));
	t.false(m(NaN));
	t.false(m(''));
	t.false(m(0));
	t.false(m(false));
});
