const chalk = require('chalk')
const fs = require('fs')
global.author = `RAXX\n\nOLEH ONE` //ini untuk wm stiker ya kawan
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})