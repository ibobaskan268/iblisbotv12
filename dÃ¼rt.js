const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) return message.author.send('Bu komutu özel mesajlarda kullanamazsın.'); 
  let kullanici = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.channel.send('Dürtmek İçin Bir Kullanıcıyı Etiketlemelisin.').catch(console.error);
  if(kullanici.bot) return message.channel.send(`Ya Sabır Olm Sen Dayakmı İstiyon Git Lan Başkasını Dürt Sikcem Şimdi Belanı Oç.`)
  if(kullanici === message.author) return message.channel.send(`Sen Benimi Kandırmaya Çalışıyon Oç Kendini Dürtemessin Git Başkasını Dürt Aq.`)
  message.channel.send('Bak Şimdi Sen Bu Mübarek Arkadaşı Dürttün Aranızda Kavga Ve Benzeri Şeyler Olursa Sorumlusu Ben Değilim Ona Göre...')
  const embed = new Discord.RichEmbed()
  .setColor('GREEN')
  .setAuthor(`Geçmiş Olsun Mümin Kardeşim Dürtüldün!`, kullanici.avatarURL)
  .setDescription(`Hey <@${kullanici.id}>, <@${message.author.id}> Adlı Mümin Arkadaşımız Sizi Dürttü Geçmiş Olsun.`)
  .setFooter('- Dürtme', client.user.avatarURL)
  .setThumbnail(message.author.avatarURL)
  return kullanici.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dürt'],
  permlevel: 0
};

exports.help = {
  name: 'dürt',
  description: 'Etiketlediğiniz kullanıcıyı dürtersiniz.',
  usage: 'dürt @Kullanıcı'
};