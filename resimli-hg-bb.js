const Discord = require('discord.js')
const db = require('quick.db');
exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`Bu komutu kullanman için \`Kanalları Yönet\` Yetkisine sahip olan gerek!`)

    let kanal = message.mentions.channels.first();
  
  
  if(args[0] === "kapat") {
    
       db.delete(`gelenKanal_${message.guild.id}`)
    return message.channel.send(`Giriş-Çıkış başarıyla kapatıldı!`)
}



   if(!kanal) message.channel.send('Geçersiz argüman! `i!giriş-çıkış <kanal>`')  
    
  
 
   let gelengiden = await db.set(`gelenKanal_${message.guild.id}`, kanal.id)
return message.channel.send(`Giriş-Çıkış kanalı <#${kanal.id}> olarak ayarlandı!`)


}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,

}

exports.help = {
    name: 'giriş-çıkış',
    description: 'Gelen giden kanalını belirler.',
    usage:"giriş-çıkış"
}