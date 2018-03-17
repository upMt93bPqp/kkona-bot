const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {

let sicon = message.guild.iconURL;
let serverembed = new Discord.RichEmbed()
  
  serverembed.setTitle("Servun tiedot")
  .setColor("#2291f4")
  .setThumbnail(sicon)
  .addField("Nimi", message.guild.name)
  .addField("Luotu", message.guild.createdAt)
  .addField("Jäseniä servulla", message.guild.memberCount);

return message.channel.send(serverembed);

}

module.exports.help = {
  name: "info"
}
