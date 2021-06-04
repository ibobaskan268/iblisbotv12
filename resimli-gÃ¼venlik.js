const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async (bot, message, args) => {
  
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`Bu komutu kullanman için \`Kanalları Yönet\` Yetkisine sahip olan gerek!`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`guvenlik3_${message.guild.id}`)
  
  if (args[0] === "kapat") {
    if(!logkanal) return message.channel.send(`Ayarlanmayan şeyi sıfırlayamazsın!`);
    
   db.delete(`guvenlik3_${message.guild.id}`)
  
   message.channel.send(`Güvenlik başarıyla kapatıldı!`);
 
  
    return
  }
  
if (!logk) return message.channel.send("Geçersiz argüman! `i!güvenlik <kanal>`")
 

   db.set(`guvenlik3_${message.guild.id}`, logk.id)

 message.channel.send(`Güvenlik kanalı ${logk} olarak ayarlandı!`);




}


  
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'güvenlik',
  description: '',
  usage: 'güvenlik'
};
