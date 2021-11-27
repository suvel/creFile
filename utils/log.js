const flags = require('./cli').flags;
const alert = require('cli-alerts');

const { debug } = flags;

module.exports = info => {
	if (debug) {
		alert({
			type: `warning`,
			name: `DEBUG LOG`,
			msg: ``
		});
		console.log(info);
		console.log();
	}
};
