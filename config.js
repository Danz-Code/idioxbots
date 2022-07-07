//════════════════════════════//
//RECODE MINIMAL KASIH CREDIT NGENTOT
//════════════════════════════//

const fs = require("fs")
const chalk = require("chalk")

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoReadAll = false // auto reading in all pchat gc and status (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner2 = ['6285161310376'] //ur owner number
global.owner = ['6285161310376','62895325677273']
global.ownername = "Idioxpedia CS"
global.ytname = "Email : idioxpedia@my.id  " //ur yt chanel name
global.socialm = "Website: https://idioxpedia.my.id" //ur github or insta name
global.location = "Indonesia, Dki Jakarta, Krendang" //ur location

//bot bombdy
global.botname = "Idioxbot" //ur bot name
global.websitex = "https://idioxpedia.my.id" //ur website
global.vidmenu = { url: 'https://a.uguu.se/eFNTvNt.mp4' } //gif and video menu
global.packname = "Sticker By"
global.author = "Idioxbot"
global.themeemoji = ""
global.reactmoji = ""
global.dogeemoji =""
global.ownertag = ['Dev Idioxpedia'] //ur owner tag
global.ownernummenu = ['62895325677273','6285161310376'] //ur owner number in menu and all
global.watermark = "idioxbot" //ur watermark
global.instamy = "https://instagram.com/idioxpeople"
global.linkz1 = "https://chat.whatsapp.com/K3bSwzukGehGoKxTTWqmt2"
global.linkz2 = "https://youtube.com"

//Bot theme media
global.thum = fs.readFileSync("./media/theme/idioxpic.png") //ur thumb pic
global.log0 = fs.readFileSync("./media/theme/idioxpic.png") //ur logo pic
global.err4r = fs.readFileSync("./media/theme/idioxpic.png") //ur error pic
global.thumb = fs.readFileSync("./media/theme/idioxpic.png") //ur thumb pic

//database
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.lolhuman = "KaysaS"
global.sessionName = "session"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Done✓',
    admin: '*Khusus Admin*',
    botAdmin: '*Bot Bukan Admin*',
    owner: '*Khusus Pemilik Bot*',
    group: '*Khusus Didalam Group*',
    private: '*Khusus Chat Private*',
    bot: '*Khusus Yang Jadibot*',
    wait: '*Ditunggu sebentar kak, sedang kita proses.*',
    linkm: '*Linknya Mana?*',
    error: 'Error!',
    noregist: 'Kamu tidak terdaftar dalam database!',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}
// api website by xenz
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// key
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}
//menu logo maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
