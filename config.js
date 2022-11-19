import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import moment from 'moment-timezone'

/*Oᴡɴᴇʀ number*/
global.owner = [
  ['6282195322106', '️One', true],
  ['6282195322106', '️Two', true],
  ['6282195322106', '️Three', true],
  ['6282195322106', '️Four', true],
  ['6282195322106', '️Five', true],
  ['6282195322106', '️Six', true],
  ['6282195322106', '️Seven', true],
  ['6282195322106', '️Eight', true],
  ['6282195322106', '️Nine', true],
  ['6282195322106', '️Teen', true]
]
global.mods = []
global.prems = []
global.girlfren = []

/*Website*/
global.APIs = {
 amel : 'https://melcanz.com',
 bg : 'http://bochil.ddns.net',
 bsbt : 'https://rest-beni.herokuapp.com',
 bx : 'https://bx-hunter.herokuapp.com',
 dhnjing : 'https://dhnjing.xyz',
 dzx : 'https://api.dhamzxploit.my.id',
 erdwepe : 'https://erdwpe-api.herokuapp.com',
 fdci : 'https://api.fdci.se',
 hardianto : 'https://hardianto.xyz',
 jonaz : 'https://jonaz-api-v2.herokuapp.com',
 LeysCoder : 'https://leyscoders-api.herokuapp.com',
 lolhuman : 'https://api.lolhuman.xyz',
 neoxr : 'https://api.neoxr.my.id',
 nrtm : 'https://nurutomo.herokuapp.com',
 nzcha : 'http://nzcha-apii.herokuapp.com',
 pencarikode : 'https://pencarikode.xyz',
 violetics : 'https://violetics.pw',
 xteam : 'https://api.xteam.xyz',
 zahir : 'https://zahirr-web.herokuapp.com',
 zekais : 'http://zekais-api.herokuapp.com',
 zeks : 'https://api.zeks.xyz',
 zenz : 'https://zenzapis.xyz'
}

/*Apikey*/
global.APIKeys = {
 'https://api.neoxr.my.id' : '5VC9rvNx',
 'https://api.lolhuman.xyz' : 'ed78c137a46873c5b8e5fe3b',
 'https://api.xteam.xyz' : 'HIRO',
 'https://api.zeks.xyz' : 'apivinz',
 'https://hardianto-chan.herokuapp.com' : 'hardianto',
 'https://hardianto.xyz' : 'hardianto',
 'https://leyscoders-api.herokuapp.com' : 'MIMINGANZ',
 'https://melcanz.com' : 'manHkmst',
 'https://pencarikode.xyz' : 'pais',
 'https://rest-beni.herokuapp.com' : 'benniismaelapikey',
 'https://violetics.pw' : 'beta',
 'https://zahirr-web.herokuapp.com' : 'zahirgans',
 'https://zekais-api.herokuapp.com' : 'zekais',
 'https://zenzapis.xyz' : 'f9fccfcff1'
}

/*Lolhuman*/
global.lolkey = 'ed78c137a46873c5b8e5fe3b'
/*Xteam*/
global.xteamkey = 'HIRO'
/*Xcoders*/
global.xckey = '7iyNa0qA'

/*List Key
-Lolhuman-
'327a6596e4c4baa20c756132'
'bukanitucuy14315195'
'85faf717d0545d14074659ad'
'ed78c137a46873c5b8e5fe3b'

-XTEAM-
'5bd33b276d41d6b4'
'NezukoTachibana281207'
'HIRO'

-Neoxr-
'5VC9rvNx'
*/

/*Number*/
global.nomorbot = '6285171216276'
global.nomorown = '6282195322106'
global.namebot = 'ʜɪɴᴀᴛᴀ-ʙᴏᴛ'
global.nameown = '「 Oᴡɴᴇʀ 」'

/*Watermark*/
global.wm = '                「 ʜɪɴᴀᴛᴀ-ʙᴏᴛ あ⁩ 」'
global.wm2 = '꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘օառɛʀ˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷'
global.wm3 = '⫹⫺ ʜɪɴᴀᴛᴀ-ʙᴏᴛ'
global.botdate = `⫹⫺ Date :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}`
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`
global.titlebot = `⫹⫺ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}\n⫹⫺ Date Server :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}`

/*Thumbnail*/
global.thumb = global.technos
global.imagebot = global.cats
global.giflogo = 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4'
global.thumbs = global.hinatas
global.fla='https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

global.thumbnailUrl = global.wpgames

/*Thumbnail*/
global.hoppai = global.cosplays
global.hyuri = global.yuris
global.hLokun = global.clolis
global.hloli = global.lolis
global.hneko = global.nekos
global.hbunny = global.hentais
global.hbeach = global.mountains
global.hwaifu = global.waifus
/*Link*/
global.sig = 'https://www.instagram.com/notifikasi_pemberitahuan'
global.sgh = 'https://www.github.com/AyGemuy'
global.sgc = 'https://chat.whatsapp.com/BAs2c2UeLE8AaI806UWUvI'
global.sdc = 'https://www.discord.com/wudysoft'
global.snh = 'https://www.tiktok.com/@upload_file'
global.sfb = 'https://www.facebook.com/'
global.syt = 'https://www.youtube.com/'

/*Nsfw*/
global.optsnsfw = true
global.premnsfw = true

/*Type*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

/*Fake*/
global.fsizedoc = '1'.repeat(10)
global.fpagedoc = '1'.repeat(10)
global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'


/*Hiasan*/
global.dmenut = ['┅────┅『','❏┅────┅『','❏─┅──┅〈','☰ ━━━ ❨','ଓ═┅═━–〈','❩ ━━┄┈ •⟅','❏––––––『','––––––『'].getRandom()
global.dmenub = ['┊•','┃','┊↬','┊','┊✦ '].getRandom()
global.dmenub2 = dmenub
global.dmenuf = ['┗━━┈┈ ⳻⳻','┗––––––––––✦','┗━═┅═━––––––๑\n','』––––––','┗┅────────┅✦\n','┗──┅───────┅๑\n'].getRandom()

/*Hiasan*/
global.cmenut = dmenut
global.cmenuh = ['』┅────┅','』––––––','❩ ━━┄┈ •⟅'].getRandom()
global.cmenub = dmenub
global.cmenuf = dmenuf
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.pmenus = ['✦','⛶','❏','⫹⫺','◈▻','➭'].getRandom()
global.dashmenu = dmenut + ' *𝐃𝐀𝐒𝐇𝐁𝐎𝐀𝐑𝐃* ' + cmenuh

global.htki = dmenut
global.htka = cmenuh
global.lopr = '🅟'
global.lolm = 'Ⓛ'
global.htjava = pmenus

/*Watermark*/
global.stickpack = cmenua
global.stickauth = `☂︎ 𝗛𝗶𝗻𝗮𝘁𝗮 乂 𝘄𝘂𝗱𝘆𝘀𝗼𝗳𝘁\n⫹⫺ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩\nwa.me/${global.nomorbot}`
global.packname = '☂︎ ᴄʀᴇᴀᴛᴇᴅ ʙʏ'
global.author = '𝗛𝗶𝗻𝗮𝘁𝗮 乂 𝘄𝘂𝗱𝘆𝘀𝗼𝗳𝘁'
global.multiplier = 10

/*Pesan*/
global.eror = '*ᴇʀᴏʀʀ!*'
global.wait = '*ᴡᴀɪᴛ!*'
global.render = '*ʀᴇɴᴅᴇʀ!*'
global.webs = 'https://s.id/Cerdasin62'
global.logo = 'https://i.pinimg.com/564x/f7/d2/e4/f7d2e48fd59a8c01cd396bfc70b0a2d1.jpg'
global.gcwangsaf = 'https://chat.whatsapp.com/Fxz8FpQ0ddr2GrEjfYkJ1E'

/*Donasi*/
global.saweria = 'https://saweria.co/wudysoft'
global.dana = '0887435373103'
global.pulsa = '082195322106'
global.trakteer = 'https://trakteer.id/wudysoft'
global.paypal = 'wudysoft@mail.com'
global.gopay = '082195322106'
global.pdana = '0887435373103'
global.povo = '082195322106'
global.pgopay = '082195322106'
global.ppulsa = '082195322106'
global.ppulsa2 = '082195322106'
global.psaweria = 'https://saweria.com/Wudysoft'

/*Emoji*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      Fox: '🦊',
      agility: '🤸‍♂️',
      anggur: '🍇',
      apel: '🍎',
      aqua: '🥤',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      batu: '🧱',
      berlian: '💎',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      botol: '🍾',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      centaur: '🎠',
      chicken: '🐓',
      coal: '⚱️',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      eleksirb: '🧪',
      elephant: '🐘',
      emasbatang: '🪙',
      emasbiasa: '🥇',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      foodpet: '🍱',
      fox: '🦊',
      gardenboc: '🗳️',
      gardenboxs: '📦',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      griffin: '🦒',
      health: '❤️',
      healtmonster: '❤‍🔥',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      jeruk: '🍊',
      kaleng: '🥫',
      kardus: '📦',
      kayu: '🪵',
      ketake: '💿',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      koinexpg: '👛',
      kucing: '🐈',
      kuda: '🐎',
      kyubi: '🦊',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      makanancentaur: '🥗',
      makanangriffin: '🥙',
      makanankyubi: '🍗',
      makanannaga: '🍖',
      makananpet: '🥩',
      makananphonix: '🧀',
      mana: '🪄',
      mangga: '🥭',
      money: '💵',
      mythic: '🗳️',
      mythic: '🪄',
      naga: '🐉',
      pancingan: '🎣',
      pet: '🎁',
      petFood: '🍖',
      phonix: '🦅',
      pickaxe: '⛏️',
      pisang: '🍌',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      rubah: '🦊',
      sampah: '🗑️',
      serigala: '🐺',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      tiketcoin: '🎟️',
      trash: '🗑',
      umpan: '🪱',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
 }

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright('Update config.js'))
  import(`${file}?update=${Date.now()}`)
})
