import {expectType} from 'tsd';
import isObj = require('.');

const foo = 'foo';

if (isObj(foo)) {
	expectType<object>(foo);
}
