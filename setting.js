const chalk = require('chalk')
const fs = require('fs')


// edit thumb ada di file string/ppbot.js

global.owner = ['6282280420522'] // pakai nomor owner
global.ownernomer = "6282280420522" // pakai nomor owner
global.socialmedia = "-" // ini ig buat di ownerjy
global.yutub = "gak tau dah"// sama
global.lokasi = "Indonesia, sumaterabarat, bukittingi"//

global.packgename = "by" 
global.author = "ONE" 

global.title = 'RAXX! '//Tittle reply 
global.body = 'ONE' //body reply

global.welcome = false 
global.left = false


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})