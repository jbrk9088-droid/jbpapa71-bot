const config = require("../config")

module.exports = async (sock,msg,from)=>{

sock.sendMessage(from,{
text:`Owner : ${config.OWNER}`
})

}
