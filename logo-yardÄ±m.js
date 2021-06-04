const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const rexusyardım = new Discord.MessageEmbed()
  .setTitle("İblis Logo Yardım Menüsü")
  .setColor("RANDOM")
  .addField("**i!alev**", "** <:3863_gearz:828295808931069952> `Alevli Logo Oluşturur.`**",)
  .addField("**i!altın**", "** <:3863_gearz:828295808931069952> `Altınlı Logo Oluşturur.`**",)
  .addField("**i!anime**", "** <:3863_gearz:828295808931069952> `Dene gör beni niye yoruyon amk.`**",)
  .addField("**i!arrow**", "** <:3863_gearz:828295808931069952> `Adı üstünde arrow ok ile alakalı bir logo oluşturur.`**",)
  .addField("**i!basit**", "** <:3863_gearz:828295808931069952> `Adı üstünde basit yani basit bi logo oluşturur.`**",)
  .addField("**i!dinamik**", "** <:3863_gearz:828295808931069952> `Dinamik logo oluşturur.`**",)
  .addField("**i!elmas**", "** <:3863_gearz:828295808931069952> `Elmas logo oluşturur.`**",)
  .addField("**i!green**", "** <:3863_gearz:828295808931069952> `Yeşil renk ile alakalı bir logo oluşturur.`**",)
  .addField("**i!habbo**", "** <:3863_gearz:828295808931069952> `Dene gör amk beni niye yoruyon oruclu oruclu.`**",)
  .addField("**i!kalın**", "** <:3863_gearz:828295808931069952> `Adı üstünde kalın yani kalın ile alakalı logo oluşturur.`**",)
  .addField("**i!red**", "** <:3863_gearz:828295808931069952> `Adı üstünde red yani kırmızı daha ne bekliyon amk kırmızı renk ile alakalı logo oluşturur.`**",)
  .addField("**i!bubble1**", "** <:3863_gearz:828295808931069952> `Adı üstünde bubble1 yani balon ya amk uraştırma dene gör.`**",)
  .addField("**i!bubble2**", "** <:3863_gearz:828295808931069952> `Adı üstünde bubble2 yani balon ile alakalı logo yapar uraştırma beni git dene gör.`**",)
  .addField("**i!comic**", "** <:3863_gearz:828295808931069952> `Dene gör knks bunu hiç bilmiyorum ne tür logo yapıyo onu bilmiyorum uraştırma beni git dene gör.`**",)
  .addField("**i!cool**", "** <:3863_gearz:828295808931069952> `Hawali bir logo oluşturur 😎`**",)
  .addField("**i!discord**", "** <:3863_gearz:828295808931069952> `Bunu hiç bilmiyorum beni yormadan git dene ve gör ama sanırım discord ile alakalı bir logo oluşturuyo.`**",)
  .addField("**i!gold**", "** <:3863_gearz:828295808931069952> `Bunuda hiç bilmiyorum git dene gör beni hiç yorma.`**",)
  .addField("**i!grafiti**", "** <:3863_gearz:828295808931069952> `Sanırım grafiti ile alakalı logo oluşturuyo.`**",)
  .addField("**i!kalp**", "** <:3863_gearz:828295808931069952> `Kalpli logo oluşturur. ^^`**",)
  .addField("**i!neonmavi**", "** <:3863_gearz:828295808931069952> `Bu komut neonlu mavi renkli logo oluşturuyo sanırım.`**",)
  
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
  aliases: ['logo-yardım','logo-help'],
  permLevel: 0
};

exports.help = {
  name: 'logo-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'logo-yardım [komut]'
}; //`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !** //`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !** //`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**