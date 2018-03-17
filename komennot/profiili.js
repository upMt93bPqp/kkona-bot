const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {

const embed = new Discord.RichEmbed()

  .setThumbnail(message.author.avatarURL)
  embed.setTitle("Käyttäjän " + message.author.tag + " tiedot")
  .setColor("#2291f4")
  .addField("ID", message.author.id)
  .addField("Käyttäjä luotu", message.author.createdAt.toDateString())
  .addField("Käyttäjä liittyi", message.guild.joinedAt.toDateString())

return message.channel.send(embed);

}

module.exports.help = {
  name: "profiili"
}
