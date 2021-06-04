const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const rexusyardım = new Discord.MessageEmbed()
    .setTitle("İblis Moderasyon")
    .setColor("RANDOM")
    .addField(
      "**i!reklamengel **",
      "** <:3863_gearz:828295808931069952> `Reklam Engeli Açarsınız.`**"
    )
    .addField(
      "**i!küfürengel **",
      "** <:3863_gearz:828295808931069952> `Küfür Engeli Açarsınız.`**"
    )
    .addField(
      "**i!emoji-yükle**",
      "** <:3863_gearz:828295808931069952> `Sunucunuza Emoji Yüklersiniz.`**"
    )
	.addField(
      "**i!mute**",
      "** <:3863_gearz:828295808931069952> `İstediğiniz Kişiyi SÜreli Şekilde Susturursunuz.`**"
    )
    .addField(
      "**i!slowmode**",
      "** <:3863_gearz:828295808931069952> `Yavaş Mod Ayarlarsınız.`**"
    )
    .addField(
      "**i!sa-as**",
      "** <:3863_gearz:828295808931069952> `Sa-As Mesajını Açar.`**"
    )
    .addField(
      "**i!sil**",
      "** <:3863_gearz:828295808931069952> `Belli Miktarda Mesaj Siler.`**"
    )
      .addField(
      "**i!banlılar**",
      "** <:3863_gearz:828295808931069952> `Bu komut sayesinde sunucunuzdaki banlı olan kişilerin isimleri ve etiketleri ile birlikte liste yapıp gösterir ^^`**"
    )
        .addField(
      "**i!tag-taraması**",
      "** <:3863_gearz:828295808931069952> `Bu komut sayesinde sunucunuzdaki taglı olan kişilerin isimleri ve etiketleri ile birlikte bir liste yapıp gösterir ^^`**"
    )
          .addField(
      "**i!yapımcım**",
      "** <:3863_gearz:828295808931069952> `Bu komut sayesinde botun yapımcılarını görebilirsiniz ^^`**"
    )
            .addField(
      "**i!şikayet**",
      "** <:3863_gearz:828295808931069952> `Bu komut sayesinde botun destek sunucusuna şikayetlerinizi iletebilirsiniz ^^`**"
    )
              .addField(
      "**i!prefix**",
      "** <:3863_gearz:828295808931069952> `Bu komut sayesinde botun prefixini istediniz gibi değiştirebilirsiniz ^^`**"
    )
                .addField(
      "**i!yetkilerim**",
      "** <:3863_gearz:828295808931069952> `Bu komut sayesinde hangi yetkiye sahib olduğunuzu ve olmadığınızı görebilirsiniz ^^`**"
    )

    .setFooter("İblis ©️ 2020 Tüm Hakları Saklıdır.")
    .setImage(
      "https://api.creavite.co/out/10adb66c-7c82-4b1c-94ef-ec3875e95105_standard.gif"
    );

  if (!params[0]) {
    const rexuscommand = Array.from(client.commands.keys());
    const longest = rexuscommand.reduce(
      (long, str) => Math.max(long, str.length),
      0
    );
    message.channel.send(rexusyardım);
  } else {
    let rexuscommands = params[0];
    if (client.commands.has(rexuscommands)) {
      rexuscommands = client.commands.get(rexuscommands);
      message.author.send(
        "İblis",
        `= ${rexuscommands.help.name} = \n${rexuscommands.help.description}\nDoğru kullanım: ` +
          prefix +
          `${rexuscommands.help.usage}`
      );
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["moderasyon"],
  permLevel: 0
};

exports.help = {
  name: "moderasyon",
  description: "Tüm komutları gösterir.",
  usage: "moderasyon [komut]"
};
//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**