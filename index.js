#!/usr/bin/env node

/**
 * cre-file
 * To generate file from txt file
 *
 * @author Suvel Rathneswar <https://github.com/suvel>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const generate = require('./utils/generate')

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	
	debug && log(flags);

	input.includes(`gen`) && generate()

})();
