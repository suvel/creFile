const customLog = require('../functions/customLog');

module.exports = function (fileNames) {
	try {
		const fs = require('fs');
		fileNames.forEach(fName => {
			fs.writeFile(fName, '', function (err) {
				if (err) throw err;
				console.log(`- Created ${fName}`);
			});
		});
	} catch (exc) {
		console.log('Error while creating the files..');
	}
};
