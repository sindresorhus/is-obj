/**
Check if a value is an object.

Keep in mind that array, function, regexp, etc, are objects in JavaScript.

@example
```
import isObj = require('is-obj');

isObj({foo: 'bar'});
//=> true

isObj([1, 2, 3]);
//=> true

isObj('foo');
//=> false
```
*/
declare function isObj(x: unknown): x is object;

export = isObj;
