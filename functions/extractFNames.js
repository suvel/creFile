module.exports = function (stringArr) {
	try {
		let fNames = [];
		stringArr.forEach(function (line) {
			if (line?.trim()) {
				const fName = line.match(/\|(.[\w]*\.[\w]{1,})\|/)[1];
				fNames.push(fName);
			}
		});
		return fNames;
	} catch (exc) {
		console.log(
			'Error while extracting file name from the file, make sure you placing the filename inside || eg. |1.txt|'
		);
		return [];
	}
};
