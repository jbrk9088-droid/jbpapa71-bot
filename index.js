const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys")

async function startBot(){

const { state, saveCreds } = await useMultiFileAuthState("session")

const sock = makeWASocket({
auth: state,
browser: ["JB PAPA 71", "Chrome", "1.0"]
})

sock.ev.on("creds.update", saveCreds)

// YOUR NUMBER
const phoneNumber = "584169861331"

if(!sock.authState.creds.registered){

const code = await sock.requestPairingCode(phoneNumber)

console.log("Pairing Code:", code)

}

sock.ev.on("messages.upsert", async ({messages}) => {

const msg = messages[0]

if(!msg.message) return

const text = msg.message.conversation || msg.message.extendedTextMessage?.text

if(text === ".ping"){
sock.sendMessage(msg.key.remoteJid,{text:"🏓 Pong JB PAPA 71"})
}

})

}

startBot()
