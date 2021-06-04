const Discord = require('discord.js');

exports.run = async (client, message, args) => {
 let güvenlik = message.guild.verificationLevel
  if(güvenlik === "NONE") güvenlik = "Yok"
    if(güvenlik === "LOW") güvenlik = "Düşük"
      if(güvenlik === "MEDIUM") güvenlik = "Orta"
   if(güvenlik === "HIGH") güvenlik = "Yüksek"
     if(güvenlik === "VERY_HIGH") güvenlik = " En Yüksek"
     const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0
  let guild = message.guild;
     let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
    let textChannels = message.guild.channels.cache.filter(m => m.type == "text").size;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let  çevrimiçi = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size
    const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setThumbnail(`https://media.discordapp.net/attachments/761099716993613824/771419350828843059/gif_3.gif?width=115&height=115`)
    
        .addField(`:white_small_square: **__Sunucudaki Toplam Üye Sayısı__**`,`**\`\`\`${message.guild.memberCount}\`\`\`**`)
    
        .addField(`:white_small_square: **__Seslideki Üye Sayısı__**`,`**\`\`\`${count}\`\`\`**`)
    
      .addField(`:gear: **__Güvenlik Seviyesi__**`,`**\`\`\`${güvenlik}\`\`\`**`)
    
        .addField(`:white_small_square:  **__Yazı Kanalları__**`, `» **${textChannels}**`)
    
        .addField(`:white_small_square:  **__Ses Kanalları__**`, `» **${voiceChannels.size}**`)
    
        .addField(`:white_small_square:  **__Roller__**`,`»  **${message.guild.roles.cache.size}**`)
    
        .addField(`:white_small_square:  **__Emojiler__**`,`»  **${message.guild.emojis.cache.size}**`)
    
       .addField(`:warning:  **__Boost Seviyesi__**`,`»  **${message.guild.premiumTier}/3**`)
    
        .addField(`:warning:  **__Boost Sayısı__**`,`»  **${message.guild.premiumSubscriptionCount}**`)
   
       .setTitle(`:white_small_square: ${message.author.tag} - Tarafından istendi.`)
    .setImage("https://media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")
        .setFooter(`© 2020 İblis BOT Tüm Hakları Saklıdır.`, client.user.avatarURL)
    message.channel.send(embed);

} 


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['gelişmiş-say'],
    permLevel: 0
};

exports.help = {
    name: 'gelişmiş-say',
    description: 'Say',
    usage: 'say'
}