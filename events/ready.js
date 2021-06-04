const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;
module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
    
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] İBS: İblis Bot Sistemleri Aktif Oldu Bot Aktif FİYUUU! `
);
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("idle");
  var oyun = [
    "Yapımcım: ๖ۣۜKâygısız.dll ~_^#5320",
    "Selam. Yabancı Botlardan Çok Korkuyorum",
    "Lütfen, Onaylı Bot Olmam İçin Bana Yardım Edermisin ?",
    "Yardım Almak İçin i!yardım Yazman Yeterli Dostum ^^",
    "Lütfen Onaylı Bir Bot Olmam İçin Beni Sunucuna Al",
    "Hey Dostum. Beni Davet Etmek İçin i!davet Yazman Yeterli ^^",
    "Eğer Bir Yardıma İhtiyacın Varsa Hiç Çekinme i!destek-sunucum Yazarak Destek Sunucumuza Gelip Botun Yapımcılarına Dm Yolu İle Anlatabilirsin Derdini..."
  ];
  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);
    client.user.setGame(oyun[random], "https://www.twitch.tv/iblisbotresmi");
  }, 1 * 1500);
};