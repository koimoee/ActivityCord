const dotenv = require('dotenv');
const chalk = require("chalk");
const TOKEN = (process.env.TOKEN);
const { Client } = require('discord.js-selfbot-v11');
let rpcGenerator = require("discordrpcgenerator");
const client = new Client();

client.on("ready", () => {
    let custom = new rpcGenerator.CustomStatus()
    .setState("ton text du custom status")
    .setUnicodeEmoji("⚡")
     client.user.setPresence(presence.toDiscord())
    }).catch(console.error)
  console.log(("[" + chalk.greenBright.bold("LISTENING") + "]") + ` Successfully logged in as ${client.user.username} (${client.user.id})!`);
})

client.login(TOKEN);
