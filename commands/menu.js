const config = require("../../config")

module.exports = async (sock,msg,from)=>{

sock.sendMessage(from,{
image:{url:config.MENU_IMAGE},
caption:`

☠️ ${config.BOT_NAME}

──── GENERAL ────
.menu
.ping
.alive
.owner
.help
.info
.time
.date

──── FUN ────
.joke
.meme
.fact
.truth
.dare
.roast

──── AI ────
.ai
.gpt
.chat
.code

──── DOWNLOAD ────
.song
.play
.video
.ytmp3
.ytmp4

──── GROUP ────
.tagall
.kick
.promote
.demote
.antilink
.welcome

──── MEDIA ────
.sticker
.toimg
.wallpaper
.anime
.cat
.dog

──── TOOLS ────
.ip
.number
.osint
.shortlink
.weather
.news
.translate

📢 WhatsApp Channel
${config.WHATSAPP_CHANNEL}

💬 Telegram Group
${config.TELEGRAM_GROUP}

`
})

}
