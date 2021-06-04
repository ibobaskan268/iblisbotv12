const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
 //`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**
message.delete();
message.channel.createWebhook(message.author.username, {avatar: message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://media.discordapp.net/attachments/824358640890282004/828293865977937920/Adsz_tasarm.png'}).then(async web => {
const hook = new Discord.WebhookClient(web.id, web.token);
const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/765956003728326677/766009591866851358/4ea1e74d-1c99-490a-9c13-d46ec11bc4642Fkurallar.gif');
hook.send(`📢 KURALLAR
**- 1.) Siyaset yapmak, ağır argo, tag içi kavga çıkartmak yasak. (Dip Not:Sonucu Ya Mute Olur. Yada Banlanır ^^)

- 2.) Kişiye yönelik ağır küfür etmek (kişi rahatsız olacak derecede) yasaktır. (Dip Not:Sonucu Mute Olur. Yani Kısaca O Küfür Eden Kişi Mute Yer ^^)

- 3.) Spam yapmak kesinlikle yasaktır. Lütfen yazacaklarınızı arka arkaya değil, tek seferde yazınız.

- 4.) Reklam yapmak kesinlikle yasaktır (DİPNOT:Dmden reklam yapanları görürsem veya yakalarsam veya sunucuda aynı şekilde yapanları görürsem veya yakalarsam. Direk Acımam Uçan Banı Çakarım ^^).

- 5.) Sunucumuzdaki gacılara veya erkeklere rahatsız edici derecede, kişinin isteği dışında sarkıntılık yapmak yasaktır.

- 6.) Pornografik +18 içerik, fotoğraf veya video atmak yasaktır.

- 7.) TÜRKİYE CUMHURİYETİ milli değerlerine, örf ve adetlerine küfür etmek, hakaret etmek yasaktır.

- 8.) Her türlü dini görüşe saygı duyulması zorunludur.

- 9.) Sunucuya katılan herkes 18 yaş üstü, reşit varsayılır.

- 10.) 10 yaşının altındaki üyelerin sunucumuzda barınması yasaktır.

- 11.) Altyapı Paylaşmak Yasaktır ! **\`

`, attachment).then(() => hook.delete())
})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kurallar'
};