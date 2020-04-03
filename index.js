'use strict';
module.exports = function(value) {
    const type = typeof value;
	return value !== null && (type === 'object' || type === 'function');
};
