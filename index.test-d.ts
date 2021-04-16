import {expectType} from 'tsd';
import isObject from './index.js';

const foo = true;

if (isObject(foo)) {
	// TODO: Fix me.
	/// eslint-disable-next-line @typescript-eslint/ban-types
	// expectType<object>(foo);
}
