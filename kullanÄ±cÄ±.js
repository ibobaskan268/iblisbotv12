const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const rexusyardım = new Discord.MessageEmbed()
  .setTitle("İblis Kulanıcı Menüsü")
  .setColor("RANDOM")
  .addField("**i!avatar **", "** <:3863_gearz:828295808931069952> `Avatarınıza bakarsınız.`**",)
  .addField("**i!profil  **", "** <:3863_gearz:828295808931069952> `Profilinize bakarsınız.`**",)
  .addField("**i!sunucuresmi**", "** <:3863_gearz:828295808931069952> `Sunucu resmini gösterir.`**",)
  .addField("**i!çevir **", "** <:3863_gearz:828295808931069952> `v11 Bir kodu v12'ye çevirir.`**",)
  .addField("**i!ping **", "** <:3863_gearz:828295808931069952> `Botun Pingine Bakarsın.`**",)
  .addField("**i!davet **", "** <:3863_gearz:828295808931069952> `Beni Sunucuna Ekle.`**",)
  .addField("**i!bot-bilgi**", "** <:3863_gearz:828295808931069952> `Bot istatistiklerini görürsünüz.`**",)
  .addField("**i!bug-bildir**", "** <:3863_gearz:828295808931069952> `Yazdığınız bug'u yapımcılarıma bildirir.`**",)
  .addField("**i!davet **", "** <:3863_gearz:828295808931069952> `Botun Davet Linkini Gösterir!`**",)
  .addField("**i!balık-tut **", "** <:3863_gearz:828295808931069952> `Bu komut ile İblis isimli botumuzla balık tutarsınız ^^`**",)
  .addField("**i!düello **", "**<:3863_gearz:828295808931069952> `Bu komut ile arkadaşlarınızla 1v1 atabilirsiniz. ^^`**",)
  .addField("**i!hub **", "**<:3863_gearz:828295808931069952> `Dene gör amk herşeyi benmi söyliyim 😂`**",)
  .addField("**i!söyle **", "**:3863_gearz: `Bota Yazdırdığınız Şeyi Seslide Sesli Bir Şekilde Söyletirsiniz ^^`**",)
  .addField("**i!espiri **", "**:3863_gearz: `Dene gör niye beni yoruyon amk ^^`**",)
  .addField("**i!öp **", "**:3863_gearz: `Etiketlediğiniz kişiyi dudaktan öpersiniz ^^`**",)
  .addField("**i!stresçarkı **", "**:3863_gearz: `Bot ile bir adet stres çarkı çevirirsiniz 😂 ^^`**",)
  .addField("**i!giriş-say **", "**:3863_gearz: `Knks dene gör yeni komut bende ne işe yaradığını bilmiyorum ^^`**",)
  .addField("**i!fakemesaj **", "**:3863_gearz: `Etiketlediniz kişiye fake mesaj yazdırırsınız 😂`**",)
  .addField("**i!kapak-olsun **", "**:3863_gearz: `Etiketlediniz kişiye kapak olsun gifi yollarsınız ^^`**",)
  .addField("**i!taç **", "**:3863_gearz: `İblis botu size sunucunun taç sahibi kim olduğunu söyler ^^`**",)
  .addField("**i!yazan-kazanır **", "**:3863_gearz: `Etiketlediniz kişi ile ilk yazan kazanır oyunu oynarsınız ^^`**",)
  .addField("**i!elyazı **", "**:3863_gearz: `Örnek: i!elyazı selam Bu tür kelimeleri yazdığınız zaman bot onu el yazısına çevirip bir şekilde size geri yazar ^^`**",)
  
  .setFooter('İblis ©️ 2020 Tüm Hakları Saklıdır.')
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
  aliases: ['kullanıcı',],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Tüm komutları gösterir.',
  usage: 'kullanıcı [komut]'
};