//By Hinata
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import knights from 'knights-canvas'
export async function before(m, { conn }) {
	
	let who = m.sender ? m.sender : conn.user.jid && conn.user.jid ? conn.user.jid : '0@s.whatsapp.net'
	let name = await conn.getName(who)
	
/*Hiasan*/
		let hias_titik = ['✦','⛶','❏','⫹⫺','◈','➭','☰','ଓ','⟆•','⳻⳻'].getRandom()
		let hias_atas = [hias_titik + '┅──┅『',hias_titik + '─┅──┅『',hias_titik + ' ━━━ 『',hias_titik + '═┅═━–『',hias_titik + '––––『',hias_titik + ' ┈┄━━ 『'].getRandom()
		let hias_kiri = ['┊•','┃','┊↬','┊','┊✦ '].getRandom()
		let hias_bawah = ['┗━━┈┈ ' + hias_titik,'┗––––––––' + hias_titik,'┗━═┅═━–––––' + hias_titik,'┗┅──────┅' + hias_titik,'┗──┅─────┅' + hias_titik].getRandom()
		let hias_kanan = ['』┅──┅' + hias_titik,'』┅──┅─' + hias_titik,'』 ━━ ' + hias_titik,'』–━═┅═' + hias_titik,'』––––' + hias_titik,'』 ━━┄┈ ' + hias_titik].getRandom()

/*Thumbnail*/
		let gh = 'https://raw.githubusercontent.com/AyGemuy/RestApi/master/data/'
		let aa = await fetch(gh + 'waifu.json')
		let link_waifu = await aa.json()
		let bb = await fetch(gh + 'Mountain.json')
		let cc = await fetch(gh + 'GameWallp.json')
		let link_game = await cc.json()
		let dd = await fetch(gh + 'cosplay.json')
		let ee = await fetch(gh + 'loli.json')
		let ff = await fetch(gh + 'yuri.json')
		let gg = await fetch(gh + 'neko.json')
		let hh = await fetch(gh + 'cosplayloli.json')
		let ii = await fetch(gh + 'hentai.json')
		let jj = await fetch(gh + 'hinata.json')
		let kk = await fetch(gh + 'Technology.json')
		let random_kk = await kk.json()
		let ll = await fetch(gh + 'kucing.json')
		let random_ll = await ll.json()
		let mm = await fetch(gh + 'naruto.json')
		let random_mm = await mm.json()
		let nn = await fetch(gh + 'CyberSpace.json')
		let random_nn = await nn.json()
		
	let sapa = ['ʜᴀɪ', 'ᴏʜᴀʏᴏ', 'ᴋʏᴀᴀ', 'ʜᴀʟᴏ', 'ɴʏᴀɴɴ'].getRandom()
	let curr = ['IDR','RSD','USD'].getRandom()
	let pp = await conn.profilePictureUrl(who, 'image').catch(_ => link_waifu.getRandom())
	
    // jpegThumbnail
    let _situm = await conn.resize(link_game.getRandom(), 300, 150)
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
		global.dmenut = hias_atas
		global.dmenub = hias_kiri
		global.dmenub2 = dmenub
		global.dmenuf = hias_bawah
		global.cmenut = dmenut
		global.cmenuh = hias_kanan
		global.cmenub = dmenub
		global.cmenuf = dmenuf
		global.pmenus = hias_titik
		global.dashmenu = hias_titik + ' *D A S B O A R D* ' + hias_titik
		global.htki = dmenut
		global.htka = cmenuh
		global.htjava = pmenus

/*Thumbnail*/
		global.hwaifu = link_waifu
		global.hbeach = await bb.json()
		global.thumbnailUrl = link_game
		global.hoppai = await dd.json()
		global.hloli = await ee.json()
		global.hyuri = await ff.json()
		global.hneko = await gg.json()
		global.hLokun = await hh.json()
		global.hbunny = await ii.json()
		global.thumbs = await jj.json()
		global.thumb = random_kk.getRandom()
		global.imagebot = random_ll.getRandom()
		global.thumbdoc = random_nn.getRandom()
		global.logo = random_mm.getRandom()

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
					renderLargerThumbnail: true,
					title: author,
					body: '👋 ' + sapa + ' ᴋᴀᴋ :3 ' + name,
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
						renderLargerThumbnail: true,
						mediaUrl: sig,
						mediaType: 'VIDEO',
						description: '𝗙𝗼𝗹𝗹𝗼𝘄: ' + sig,
						title: '👋 ' + sapa + ' ᴋᴀᴋ :3 ' + name,
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
						renderLargerThumbnail: true,
						mediaUrl: sfb,
						mediaType: 'VIDEO',
						description: '𝗙𝗼𝗹𝗹𝗼𝘄: ' + sfb,
						title: '👋 ' + sapa + ' ᴋᴀᴋ :3 ' + name,
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
						renderLargerThumbnail: true,
						mediaUrl: snh,
						mediaType: 'VIDEO',
						description: '𝗙𝗼𝗹𝗹𝗼𝘄: ' + snh,
						title: '👋 ' + sapa + ' ᴋᴀᴋ :3 ' + name,
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
						renderLargerThumbnail: true,
						mediaUrl: syt,
						mediaType: 'VIDEO',
						description: '𝗙𝗼𝗹𝗹𝗼𝘄: ' + syt,
						title: '👋 ' + sapa + ' ᴋᴀᴋ :3 ' + name,
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
								text: '👋 ' + sapa + ' ᴋᴀᴋ :3 ' + name
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
					name: '👋 ' + sapa + ' ᴋᴀᴋ :3 ' + name
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
					caption: '👋 ' + sapa + ' ᴋᴀᴋ :3 ' + name,
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
					text: '👋 ' + sapa + ' ᴋᴀᴋ :3 ' + name,
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
					caption: '👋 ' + sapa + ' ᴋᴀᴋ :3 ' + name,
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
						title: '👋 ' + sapa + ' ᴋᴀᴋ :3 ' + name,
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
					title: '👋 ' + sapa + ' ᴋᴀᴋ :3 ' + name,
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