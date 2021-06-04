const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let guild = message.guild
  let terfiler = guild.channels.find('name', 'yetki-başvurusu');
  if (!terfiler) return message.reply('`yetki-başvurusu` kanalını bulamıyorum.');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Yöneticilerin belirtiği şartları yazınız. ve Kendinizi etiketleyiniz.');
  if (message.mentions.users.size < 1) return message.reply('Isminizi Etiketleyin.').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setThumbnail("https://cdn.discordapp.com/attachments/700786420637237348/733759728542416966/OzVeOZ_LOGOM.png")
    .setTimestamp()
    .addField('Yapımcım:', 'Shades Sahibim LOGO ---------------------------------->')
    .addField('Durum:', 'Bekleniyor')
    .addField('Kategori:', 'YETKİ BAŞVURU')
    .addField('Gonderen Kisi:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Bilgiler', reason);
    
    return guild.channels.get(terfiler.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['basvuru'],
  permLevel: 0
};

exports.help = {
  name: 'başvuru',
  description: 'Kullanıcıyı terfi ettirir.',
  usage: 'başvuru [kullanıcı]'
};