import {expectType} from 'tsd';
import isObject = require('.');

const foo = 'foo';

if (isObject(foo)) {
	expectType<object>(foo);
}
