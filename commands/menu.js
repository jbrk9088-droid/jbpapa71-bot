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

──── FUN ────
.joke
.meme
.fact
.truth
.dare

──── AI ────
.ai
.gpt
.chat

──── DOWNLOAD ────
.song
.video
.play
.tomp3

──── GROUP ────
.tagall
.kick
.promote
.demote

──── MEDIA ────
.sticker
.wallpaper
.anime
.cat
.dog

📢 WhatsApp Channel
${config.WHATSAPP_CHANNEL}

💬 Telegram Group
${config.TELEGRAM_GROUP}

`
})

}
