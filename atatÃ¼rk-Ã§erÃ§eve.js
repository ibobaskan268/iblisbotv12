const Discord = require('discord.js');
const Jimp = require("jimp");

exports.run = (client, message, args) => {
  const Discord = require('discord.js');
  let img = Jimp.read(message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL),
    moldura = Jimp.read("https://cdn.discordapp.com/attachments/484692865985806346/487849021658890240/image0.png");
  Promise.all([img, moldura]).then(imgs => {
    let moldura = imgs[1],
      img = imgs[0];
    moldura.resize(720, 620);
    img.resize(720, 615)
    img.composite(moldura, 0, 0).getBuffer(Jimp.MIME_PNG, (err, buffer) => {
      if (!err)
        message.channel.send(new Discord.Attachment(buffer));
    });
  });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['atatürkçerçeve'],
  permLevel: 0,
};

exports.help = {
  name: 'atatürkçerçeve',
  description: 'atam',
  usage: 'atam'
};