'use strict';

module.exports = x => {
	const type = typeof x;
	return x !== null && (type === 'object' || type === 'function');
};
