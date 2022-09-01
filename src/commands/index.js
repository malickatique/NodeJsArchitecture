const chalk = require('chalk');

const error = chalk.bold.red;
const errorBg = chalk.white.bgRed.bold;
const warning = chalk.hex('#FFA500');
const warningBg = chalk.white.bgRed.bold.hex('#FFA500');
const command = process.argv[2];

console.log(errorBg(command));
