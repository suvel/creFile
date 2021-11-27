module.exports = function (filName) {
	const fs = require('fs');
	return fs.readdirSync('.').some(fName => fName == filName);
};
