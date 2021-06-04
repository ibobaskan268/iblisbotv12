const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {

let bakım = db.fetch(`bakım`)

let arg1 = args[0]
let arg2 = args[1]
let prefix = "i!";	


if(!arg1) {
	
return message.channel.send(`${prefix}bakım aç & ${prefix}bakım kapat`)
	
}




if(arg1 == "aç") {



if(bakım) {
	
return message.channel.send(`Bakım Modu Zaten Aktif ${prefix}bakım kapat Mı Arıyorsun`)
	
}

if(!arg2) {
	
return message.channel.send(`Bir Sebep Belirlemelisiniz`)
	
}


db.set(`bakım`, arg2)

return message.channel.send(`Bot Başarıyla ${arg2} Sebebiyle Bakıma Alındı`)

}







if(arg1 == "kapat") {
	
if(!bakım) {
	
return message.channel.send(`Zaten Bakım Modu Kapalı Bunumu Arıyorsun ${prefix}bakım aç`)
	
}
	
	
db.delete(`bakım`)
	

return message.channel.send(`Başarıyla Bakım Modu Kapatıldı`)
	
	
}









}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
}

exports.help = {
  name: 'bakım',
  description: "",
  usage: ''
}