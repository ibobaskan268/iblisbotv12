const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const rexusyardım = new Discord.MessageEmbed()
  .setTitle("İblis Bot List Sistemi")
  .setColor("RANDOM")
  .addField("**i!botlist-ayar botekle-kanal #kanal**", "** :grey_exclamation: `Bot Ekleme Kanalı Ayarlar!`**",)
  .addField("**i!botlist-ayar botlog-kanal #kanal**", "** :grey_exclamation: `Bot Log Kanalı Ayarlar!`**",)
  .addField("**i!botlist-ayar başvurugiden-kanal #kanal**", "** :grey_exclamation: `Başvuru kanalı Ayarlar!`**",)
  .addField("**i!botlist-ayar yetkili @rol**", "** :grey_exclamation: `Bot List Yetkilisi Ayarlar!`**",)
  .addField("**i!bot-onayla**", "** :grey_exclamation: `Bot Onaylarsınız.`**",)
  .addField("**i!bot-reddet**", "** :grey_exclamation: `Bot Reddedersiniz.`**",)

  
  
  .setFooter('İblis ©️ 2021 Tüm Hakları Saklıdır.')
  .setImage("https://api.creavite.co/out/10adb66c-7c82-4b1c-94ef-ec3875e95105_standard.gif")

  if (!params[0]) {
    const rexuscommand = Array.from(client.commands.keys());
    const longest = rexuscommand.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(rexusyardım);
  } else {
    let rexuscommands = params[0];
    if (client.commands.has(rexuscommands)) {
      rexuscommands = client.commands.get(rexuscommands);
      message.author.send('İblis', `= ${rexuscommands.help.name} = \n${rexuscommands.help.description}\nDoğru kullanım: ` + prefix + `${rexuscommands.help.usage}`);
    }
  }
};

exports.conf = {                             
  enabled: true,                             
  guildOnly: false,
  aliases: ['botlist-sistemi',],
  permLevel: 0
};

exports.help = {
  name: 'botlist-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'botlist-sistemi [komut]'
};