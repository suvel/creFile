const customLog = require('./customLog.js');

module.exports = function (stringArr) {
	try {
		let fNames = [];
		stringArr.forEach(function (line) {
			if (line?.trim()) {
				const regexRes = line.match(/\|(.[\w]*\.[\w]{1,})\|/);
				if (regexRes?.length == 2) {
					const fName = regexRes[1];
					fNames.push(fName);
				}
			}
		});
		return fNames;
	} catch (exc) {
		customLog.error(
			'Error while extracting file name from the file, make sure you placing the filename inside || eg. |1.txt|'
		);
		return [];
	}
};
