const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys")
const fs = require("fs")
const config = require("./config")

async function startBot(){

const { state, saveCreds } = await useMultiFileAuthState("session")

const sock = makeWASocket({
auth: state,
printQRInTerminal: true
})

sock.ev.on("creds.update", saveCreds)

sock.ev.on("messages.upsert", async ({messages}) => {

const msg = messages[0]

if(!msg.message) return

const text = msg.message.conversation || msg.message.extendedTextMessage?.text

if(!text) return

const from = msg.key.remoteJid

if(!text.startsWith(config.PREFIX)) return

const command = text.slice(1).split(" ")[0]

const folders = ["general","fun","ai","download","group","media"]

for(const folder of folders){

try{

const cmd = require(`./commands/${folder}/${command}.js`)

return cmd(sock,msg,from)

}catch{}

}

sock.sendMessage(from,{text:"❌ Command not found"})

})

}

startBot()
