const fs = require('fs')
const pack = require('./package.json')
global.pairing = false // false = pairing code | true = scan QR
global.PaiCode = "MASTERIP"
global.sessionName = "session" // Nama file session

global.botname = "MASTER-IP_MD" // Bot name
global.ownername = "MASTER-IP" // Owner name
global.owner = "263779540058" // Owner number
global.botNumber = "628xxx" //  Bot number
global.version = pack.version // Version

global.packname = "Simple Script" // Sticker packname 
global.author = "MASTER-IP" // Sticker author

global.wm = "MASTER-IP_MD" // Watermark thumbnail
global.chjid = "120363418752112116" // Channel Id Gaush pakai @
global.gcjid = "120363376339687" // Group Id Gaush pakai @
global.sch = "https://whatsapp.com/channel/0029Vb5eqbeFMqrUJQ1bWZ3N"
global.sgc = "https://chat.whatsapp.com/BDrJtuxjIwh2Rgn1gBtvGx"
global.thumb = "https://files.catbox.moe/evtj4g.jpg" // Thumbnail bot 

global.domain = "" // Domain harus diakhiri tanda [ / ]
global.apikey = "" // Plta
global.capikey = "" // Pltc
global.eggs = "15"
global.locc = "1"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(`Update ${__filename}`)
  delete require.cache[file]
  require(file)

})
