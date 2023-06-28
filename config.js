
const fs = require('fs')
const chalk = require('chalk')

global.prefa = ['','!','.','🐦','🐤','🗿']
global.react1 = '🗿'
global.react2 = '👌'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
