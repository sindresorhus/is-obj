'use strict';
var test = require('ava');
var fn = require('./');

test(function (t) {
	t.assert(fn({}));
	t.assert(fn(new Object()));
	t.assert(fn(new Date()));
	t.assert(fn(new RegExp()));
	t.assert(fn(Object.create(null)));
	t.assert(fn({foo: true}));
	t.assert(fn([]));
	t.assert(fn(['foo', 'bar']));
	t.assert(fn(function () {}));
	t.assert(fn(arguments));
	t.assert(fn(/./));
	t.assert(fn(Object(0)));
	t.assert(fn(Object('foo')));
	t.assert(fn(Object(false)));
	t.assert(!fn(null));
	t.assert(!fn(undefined));
	t.assert(!fn(NaN));
	t.assert(!fn(''));
	t.assert(!fn(0));
	t.assert(!fn(false));
	t.end();
});
