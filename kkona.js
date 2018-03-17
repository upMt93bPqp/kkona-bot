const Asetukset = require("./cfg/asetukset.json");
const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");

bot.commands = new Discord.Collection();

fs.readdir("./komennot/", (err, files) => {

if(err) console.log(err);

let jsfile = files.filter(f => f.split(".").pop() === "js")
if(jsfile.lenght <= 0) {
  console.log("Komentoja ei löytynyt");
return;
 }

jsfile.forEach((f, i) => {
let props = require(`./komennot/${f}`);
  console.log(`${f} ladattiin onnistuneesti`);
  bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} on nyt päällä ja käytössä ${bot.guilds.size} serverillä`);
  bot.user.setActivity(`${Botconfig.prefix}apua | ${bot.guilds.size} serverillä`)
});

bot.on("message", async message => {
if(message.author.bot) return;
if(message.channel.type === "dm") return;

let prefix = Botconfig.prefix;
let messageArray = message.content.split(" ");
let komento = messageArray[0];
let args = messageArray.slice(1);
let commandfile = bot.commands.get(cmd.slice(prefix.length));
if(commandfile) commandfile.run(bot,message,args);

});

bot.login(Asetukset.token);
