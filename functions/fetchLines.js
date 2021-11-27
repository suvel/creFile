module.exports = function (filName) {
	return new Promise(function (resolve, reject) {
		const fs = require('fs');
		fs.readFile(filName, 'utf8', (err, data) => {
			if (err) {
				console.log('Unexpected error occurred while reading file..');
				reject(err);
			}
			resolve(data.split('\n'));
		});
	});
};
