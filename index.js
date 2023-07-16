const config = require('./config');
const { Client, GatewayIntentBits, Colors } = require("discord.js");
const { Manager } = require("real-giveaways");

const client = new Client({
    intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
    ],
    allowedMentions: {
        repliedUser: false,
    },
});

const manager = new Manager(client, {
    embedColor: Colors.Blurple,
    pingEveryone: false,
    emoji: "🎁",
  });

module.exports = {manager, client };

//Bot connection 
client.on("ready", () => {
    console.log("Connecté");
    client.user.setStatus("online")
client.user.setActivity("Zeyrox.pro" , {type: 1 })
// Charger les fichiers du GiveawaysEvents
require("./GiveawaysEvents")(client, manager);
});

client.on("messageCreate", async (message) => {
    if (!message.guild || message.author.bot) return ;
    let prefix = config.PREFIX;
    let args = message.content.slice(prefix.length).trim().split(/ +/);
    let cmd = args.shift()?.toLowerCase();

    if (cmd = "gstart"){
        message.reply("cmd working");
    }
});


//token du bot
client.login(config.TOKEN);