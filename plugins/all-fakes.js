//By Hinata
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import knights from 'knights-canvas'
export async function before(m, { conn }) {
	
	let who = m.sender ? m.sender : conn.user.jid && conn.user.jid ? conn.user.jid : '0@s.whatsapp.net'
	let name = await conn.getName(who)
	
/*Hiasan*/
		let hats =  ['┅────┅『','❏┅────┅『','❏─┅──┅〈','☰ ━━━ ❨','ଓ═┅═━–〈','❩ ━━┄┈ •⟅','❏––––––『','––––––『'].getRandom()
		let hkri =  ['┊•','┃','┊↬','┊','┊✦ '].getRandom()
		let hbwh =  ['┗━━┈┈ ⳻⳻','┗––––––––––✦','┗━═┅═━––––––๑\n','』––––––','┗┅────────┅✦\n','┗──┅───────┅๑\n'].getRandom()
		let hkna = ['』┅────┅','』––––––','❩ ━━┄┈ •⟅'].getRandom()
		let httk = ['✦','⛶','❏','⫹⫺','◈▻','➭'].getRandom()

/*Thumbnail*/
		let gh = 'https://raw.githubusercontent.com/AyGemuy/RestApi/master/data/'
		let aa = await fetch(gh + 'waifu.json')
		let bb = await fetch(gh + 'Mountain.json')
		let cc = await fetch(gh + 'GameWallp.json')
		let dd = await fetch(gh + 'cosplay.json')
		let ee = await fetch(gh + 'loli.json')
		let ff = await fetch(gh + 'yuri.json')
		let gg = await fetch(gh + 'neko.json')
		let hh = await fetch(gh + 'cosplayloli.json')
		let ii = await fetch(gh + 'hentai.json')
		let jj = await fetch(gh + 'hinata.json')
		let kk = await fetch(gh + 'Technology.json')
		let rkk = await kk.json()
		let ll = await fetch(gh + 'kucing.json')
		let rll = await ll.json()
		let mm = await fetch(gh + 'naruto.json')
		let rmm = await mm.json()
		let nn = await fetch(gh + 'CyberSpace.json')
		let rnn = await nn.json()
		
	let sapa = ['Hai', 'Ohayo', 'Kyaa', 'Halo', 'Nyann'].getRandom()
	let curr = ['AED','AFN','ALL','AMD','ANG','AOA','ARS','AUD','AWG','AZN','BAM','BBD','BDT','BGN','BHD','BIF','BMD','BND','BOB','BOV','BRL','BSD','BTN','BWP','BYR','BZD','CAD','CDF','CHE','CHF','CHW','CLF','CLP','CNY','COP','COU','CRC','CUC','CUP','CVE','CZK','DJF','DKK','DOP','DZD','EGP','ERN','ETB','EUR','FJD','FKP','GBP','GEL','GHS','GIP','GMD','GNF','GTQ','GYD','HKD','HNL','HRK','HTG','HUF','IDR','ILS','INR','IQD','IRR','ISK','JMD','JOD','JPY','KES','KGS','KHR','KMF','KPW','KRW','KWD','KYD','KZT','LAK','LBP','LKR','LRD','LSL','LTL','LVL','LYD','MAD','MDL','MGA','MKD','MMK','MNT','MOP','MRO','MUR','MVR','MWK','MXN','MXV','MYR','MZN','NAD','NGN','NIO','NOK','NPR','NZD','OMR','PAB','PEN','PGK','PHP','PKR','PLN','PYG','QAR','RON','RSD','RUB','RWF','SAR','SBD','SCR','SDG','SEK','SGD','SHP','SLL','SOS','SRD','SSP','STD','SYP','SZL','THB','TJS','TMT','TND','TOP','TRY','TTD','TWD','TZS','UAH','UGX','USD','USN','USS','UYI','UYU','UZS','VEF','VND','VUV','WST','XAF','XAG','XAU','XBA','XBB','XBC','XBD','XCD','XDR','XFU','XOF','XPD','XPF','XPT','XTS','XXX','YER','ZAR','ZMW'].getRandom()
	let wasifu = await aa.json()
	let pp = await conn.profilePictureUrl(who, 'image').catch(_ => wasifu.getRandom())
	
    // jpegThumbnail
    let thumnel = await cc.json()
    let _situm = await conn.resize(thumnel.getRandom(), 300, 150)
    let sipp = await conn.resize(pp, 150, 150)
    
    // Fake Knights
		let imagea = await new knights.Jo().setImage(pp).toBuild();
		let dataa = imagea.toBuffer();
		let imageb = await new knights.Patrick().setAvatar(pp).toAttachment();
		let datab = imageb.toBuffer();
		let imagec = await new knights.Bonk().setAvatar1(pp).setAvatar2(pp).toBuild();
		let datac = imagec.toBuffer();
		let imaged = await new knights.Burn().setAvatar(pp).toAttachment();
		let datad = imaged.toBuffer();
		let _kn = [dataa, datab, datac, datad].getRandom()
		
/*Hiasan*/
		global.dmenut = hats
		global.dmenub = hkri
		global.dmenub2 = dmenub
		global.dmenuf = hbwh
		global.cmenut = dmenut
		global.cmenuh = hkna
		global.cmenub = dmenub
		global.cmenuf = dmenuf
		global.pmenus = httk
		global.dashmenu = dmenut + ' *𝐃𝐀𝐒𝐇𝐁𝐎𝐀𝐑𝐃* ' + cmenuh
		global.htki = dmenut
		global.htka = cmenuh
		global.htjava = pmenus

/*Thumbnail*/
		global.hwaifu = await aa.json()
		global.hbeach = await bb.json()
		global.thumbnailUrl = await cc.json()
		global.hoppai = await dd.json()
		global.hloli = await ee.json()
		global.hyuri = await ff.json()
		global.hneko = await gg.json()
		global.hLokun = await hh.json()
		global.hbunny = await ii.json()
		global.thumbs = await jj.json()
		global.thumb = rkk.getRandom()
		global.imagebot = rll.getRandom()
		global.thumbdoc = rnn.getRandom()
		global.logo = rmm.getRandom()

	// Begin
		global.ucapan = ucapkan()
		global.ephemeral = '86400'
		
		// Fake adReply
		global.adReply = {
		fileLength: fsizedoc, seconds: fsizedoc,
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
					showAdAttribution: true,
					title: author,
					body: '👋 ' + sapa + ' Kak :> ' + name,
					mediaUrl: sgc,
					description: botdate,
					previewType: 'PHOTO',
					thumbnail: await(await fetch(pp)).buffer(),
					sourceUrl: sgh
				}
			}
		}
		global.fakeig = {
		fileLength: fsizedoc, seconds: fsizedoc,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: sig,
						mediaType: 'VIDEO',
						description: 'Follow: ' + sig,
						title: '👋 ' + sapa + ' Kak :> ' + name,
						body: botdate,
						thumbnailUrl: pp,
						sourceUrl: sgc
					}
				}
			}
			global.fakefb = {
			fileLength: fsizedoc, seconds: fsizedoc,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: sfb,
						mediaType: 'VIDEO',
						description: 'Follow: ' + sfb,
						title: '👋 ' + sapa + ' Kak :> ' + name,
						body: botdate,
						thumbnailUrl: pp,
						sourceUrl: sfb
					}
				}
			}
			global.faketik = {
			fileLength: fsizedoc, seconds: fsizedoc,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: snh,
						mediaType: 'VIDEO',
						description: 'Follow: ' + snh,
						title: '👋 ' + sapa + ' Kak :> ' + name,
						body: botdate,
						thumbnailUrl: pp,
						sourceUrl: snh
					}
				}
			}
			global.fakeyt = {
			fileLength: fsizedoc, seconds: fsizedoc,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: syt,
						mediaType: 'VIDEO',
						description: 'Follow: ' + syt,
						title: '👋 ' + sapa + ' Kak :> ' + name,
						body: botdate,
						thumbnailUrl: pp,
						sourceUrl: syt
					}
				}
			}
			
	// Fake Reply
		let fpayment = {
				key: {
					participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
				},
				message: {
					requestPaymentMessage: {
						currencyCodeIso4217: curr,
						amount1000: fsizedoc,
						requestFrom: '0@s.whatsapp.net',
						noteMessage: {
							extendedTextMessage: {
								text: '👋 Hay Kak :> ' + name
							}
						},
						expiryTimestamp: fsizedoc,
						amount: {
							value: fsizedoc,
							offset: fsizedoc,
							currencyCode: curr
						}
					}
				}
			}
			let fpoll = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				pollCreationMessage: {
					name: '👋 Hay Kak :> ' + name
				}
			}
		}
		let ftroli = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				orderMessage: {
					itemCount: fsizedoc,
					status: 1,
					surface: 1,
					message: botdate,
					orderTitle: author,
					sellerJid: '0@s.whatsapp.net'
				}
			}
		}
		let fkontak = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				contactMessage: {
					displayName: author,
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${who.split('@')[0]}:${who.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`,
					jpegThumbnail: sipp,
					thumbnail: sipp,
					sendEphemeral: true
				}
			}
		}
		let fvn = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				audioMessage: {
					mimetype: 'audio/ogg; codecs=opus',
					seconds: fsizedoc,
					ptt: true
				}
			}
		}
		let fvid = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				videoMessage: {
					title: author,
					h: 'Hmm',
					seconds: fsizedoc,
					caption: '👋 ' + sapa + ' Kak :> ' + name,
					jpegThumbnail: sipp
				}
			}
		}
		let ftextt = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				extendedTextMessage: {
					text: '👋 ' + sapa + ' Kak :> ' + name,
					title: botdate,
					jpegThumbnail: sipp
				}
			}
		}
		let fliveLoc = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				liveLocationMessage: {
					caption: '👋 ' + sapa + ' Kak :> ' + name,
					h: botdate,
					jpegThumbnail: sipp
				}
			}
		}
		let ftoko = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				productMessage: {
					product: {
						productImage: {
							mimetype: 'image/jpeg',
							jpegThumbnail: sipp
						},
						title: '👋 ' + sapa + ' Kak :> ' + name,
						description: botdate,
						currencyCode: 'IDR',
						priceAmount1000: fsizedoc,
						retailerId: 'Ghost',
						productImageCount: 1
					},
					businessOwnerJid: '0@s.whatsapp.net'
				}
			}
		}
		let fdocs = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				documentMessage: {
					title: author,
					jpegThumbnail: sipp
				}
			}
		}
		let fgif = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				videoMessage: {
					title: '👋 ' + sapa + ' Kak :> ' + name,
					h: 'Hmm',
					seconds: fsizedoc,
					gifPlayback: true,
					caption: botdate,
					jpegThumbnail: sipp
				}
			}
		}
		let _pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'].getRandom()
		let _pft = [fdocs, fgif, fkontak, fliveLoc, fpayment, fpoll, ftextt, ftoko, ftroli, fvid, fvn].getRandom()
		// Global Fake
		global.doc = _pdoc
		global.fakes = _pft
		global.knimg = _kn
		global.tumhiho = _situm
		
	// Ends
}

function ucapkan() {
	let waktunya = moment.tz('Asia/Jakarta').format('HH')
	let ucapin = 'Selamat malam 🌙'
	if(waktunya >= 1) {
		ucapin = 'Selamat Pagi 🗿'
	}
	if(waktunya >= 4) {
		ucapin = 'Selamat pagi 🌄'
	}
	if(waktunya > 10) {
		ucapin = 'Selamat siang ☀️'
	}
	if(waktunya >= 15) {
		ucapin = 'Selamat sore 🌅'
	}
	if(waktunya >= 18) {
		ucapin = 'Selamat malam 🌙'
	}
	if(waktunya >= 24) {
		ucapin = 'Selamat Begadang 🗿'
	}
	return ucapin
}