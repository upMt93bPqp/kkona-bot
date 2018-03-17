const Asetukset = require("./cfg/asetukset.json");
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", async () => {
  console.log(`${bot.user.username} on nyt päällä ja käytössä ${bot.guilds.size} serverillä`);
  bot.user.setActivity(`${Botconfig.prefix}apua | ${bot.guilds.size} serverillä`)
});

bot.login(Asetukset.token);
