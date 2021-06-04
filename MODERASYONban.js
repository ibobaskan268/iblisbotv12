const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<:1326_cross:826439094631399424> **Yeterli yetkiye sahip değilsin.**`)

 
  let member = message.mentions.users.first();
  if (!member) return message.channel.send(`<:1326_cross:826439094631399424> **Lütfen Bir Kişi belirt!**`)
 
  const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`<:657010782768463972:826440621317160980> ${member} **Adlı kişinin sunucudan banlamasını onaylıyor musunuz?**`)
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("Ban İşlemi iptal oldu!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(`<:745448089048842321:826438946275065896> **İşlem Başarılı! ${member} Adlı Kişi başarılı bir şekilde sunucudan banlandı!**`)
        message.guild.member(member).ban();
      }
    });
  });
};
 
exports.conf = {
  aliases: [],
  permLevel: 0,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};
 
exports.help = {
  name: "ban",
  description: "ban",
  usage: "ban"
};