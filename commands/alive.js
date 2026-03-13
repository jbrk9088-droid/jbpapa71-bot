const config = require("../config")

module.exports = async (sock,msg,from)=>{

sock.sendMessage(from,{text:`${config.BOT_NAME} Active ☠️`})

}
