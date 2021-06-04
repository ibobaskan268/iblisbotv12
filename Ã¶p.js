
const Discord = require('discord.js'); 

exports.run = async (client, msg, args) => {




exports.run = (client, message , args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('oooo eheheheh Kimi öpeceksin söle bakalım? \<a:SonsuzlukPride:793382643906379776>');
	const embed = new Discord.RichEmbed()
	.setAuthor (' ')
	.setColor (`ORANGE`)
	.setDescription( message.author.username+` adlı kullanıcı, ${mesaj} adlı kullanıcıyı öptü.` )
	
	.setImage(`https://i.kym-cdn.com/photos/images/original/000/986/968/2f5.gif`)
  return message.channel.sendEmbed(embed);
  message.react('617413726768988160')
};

}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
    kategori: 'eğlence',
	permLevel: 0
};

exports.help = {
	name: 'öp',
	description: 'istediğin kişiyi muck la fifi',
	usage: 'öp'
};
	