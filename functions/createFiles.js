const customLog = require('./customLog.js');
const log = require('../utils/log');
module.exports = function (fileNames) {
	try {
		const fs = require('fs');
		fileNames.forEach(fName => {
			fs.writeFile(fName, '', function (err) {
				if (err) throw err;
				customLog.success(`- Created ${fName}`);
			});
		});
	} catch (exc) {
		log(exc);
		customLog.error('Error while creating the files..');
	}
};
