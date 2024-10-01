/* 

 - Created by : Anggazyy
 - Base by : Siputzxx - Ziyo
 - Thanks : RxhL - Alwaysaqio - X Developer
 
 */

const fs = require('fs')
const { color } = require('./lib/myfunc')

global.owner = '@revoerID'
global.nomerowner = ["@revoerID"]
global.packname = 'Di Buat Oleh'
global.author = 'RevoerID'
global.urldb = ''; // kosongin aja
global.linkfoto = 'https://iili.io/d6eMtv2.md.jpg'
global.namaowner = 'RevoerID'
global.idsaluran = '120363324813432738@newsletter'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
