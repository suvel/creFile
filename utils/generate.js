const log = require('./log');

module.exports = function () {
	const args = process.argv;
	const ipFName = args[args.length - 1];

	log(`file name : ${ipFName}`);

	const chkFileExist = require('../functions/chkFileExist');
	const ipFExist = chkFileExist(ipFName);

	if (!ipFExist) {
		console.log("File doesn't seems to exist..");
		return;
	}

	log('File seems to exist..');

	const fetchLines = require('../functions/fetchLines');
	fetchLines(ipFName)
		.then(lins => {
			if (lins?.length == 0) throw `${ipFName} is empty`;
			//extract the filename inside
			const extractFNames = require('../functions/extractFNames');
			log(lins);
			const fileNames = extractFNames(lins);
			log(fileNames);
			//create files
			const createFiles = require('../functions/createFiles');
			createFiles(fileNames);
			console.log("");
		})
		.catch(err => {
			log(err);
		});
};
