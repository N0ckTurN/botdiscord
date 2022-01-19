const Discord = require('discord.js');
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES
    ]
});

Client.on("ready", () => {
    console.log("Connecté");
    Client.user.setStatus("online")
Client.user.setActivity("Zeyrox.pro" , {type: 1 })
});

Client.on("messageCreate", message =>{
    if (message.author.bot) return;

    message.reply("Nique ta mère et ferme ta gueule stp , Merci , CORDIALEMENT.");
});




Client.login(process.env.TOKEN);
