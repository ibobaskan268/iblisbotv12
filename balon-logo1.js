const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen Bişey Yaz**")
let link = "https://habbofont.net/font/bubble_orange/"+isim+".gif"
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setImage(link)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'bubble1',
  description: 'Logo Yaparsınız',
  usage: '-bubble1 <yazı>'
};
