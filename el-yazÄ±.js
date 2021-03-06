const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")

const mapping = {
    ' ': '   ',
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '!': '!',
    '?': '?',
    '#': '#',
    '*': '*',
    'a': '๐ช',
    'b': '๐ซ',
    'c': '๐ฌ',
    'd': '๐ญ',
    'e': '๐ฎ',
    'f': '๐ฏ',
    'g': '๐ฐ',
    'h': '๐ฑ',
    'i': '๐ฒ',
    'j': '๐ณ',
    'k': '๐ด',
    'l': '๐ต',
    'm': '๐ถ',
    'n': '๐ท',
    'o': '๐ธ',
    'p': '๐น',
    'q': '๐บ',
    'r': '๐ป',
    's': '๐ผ',
    't': '๐ฝ',
    'u': '๐พ',
    'v': '๐ฟ',
    'w': '๐',
    'x': '๐',
    'y': '๐',
    'z': '๐',
    'A': '๐',
    'B': '๐',
    'C': '๐',
    'D': '๐',
    'E': '๐',
    'F': '๐',
    'G': '๐',
    'H': '๐',
    'I': '๐',
    'J': '๐',
    'K': '๐',
    'L': '๐',
    'M': '๐',
    'N': '๐',
    'O': '๐',
    'P': '๐',
    'Q': '๐ ',
    'R': '๐ก',
    'S': '๐ข',
    'T': '๐ฃ',
    'U': '๐ค',
    'V': '๐ฅ',
    'W': '๐ฆ',
    'X': '๐ง',
    'Y': '๐จ',
    'Z': '๐ฉ'
  };

exports.run = async (client, message, args) => {

      if (args.length < 1) {
      message.channel.send('Bir mesaj yazฤฑnฤฑz');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(f => mapping[f] || f)
          .join('')
  );
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gรผzelyazฤฑ","elyazฤฑsฤฑ"],
  permLevel: 0
};

exports.help = {
  name: 'elyazฤฑ',
  description: 'Girdiฤiniz yazฤฑyฤฑ el yazฤฑsฤฑna รงevirir',
  usage: 'elyazฤฑ <yazฤฑ>'
};
