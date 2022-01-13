const chalk = require('chalk');
const discord = require('discord.js')
module.exports = {
    run: (client) => {

        client.user.setPresence({
            activities: [{ 
              name: "Ee3Dev on YT", // replace this with whatever you want
              type: "WATCHING" // there are only 5 types of activity PLAYING, STREAMING, WATCHING, LISTENING, COMPETING
            }],
            status: "online" // there are only 3 types of status dnd, online, idle
        })


//======================================================= IGNORE ======================================================================
        console.log(chalk.bold.yellowBright('📣 Name - ') + (chalk.italic.greenBright(`${client.user.tag}`)));
        console.log(chalk.bold.yellowBright('📣 ID - ') + (chalk.italic.greenBright(`${client.user.id}`)));
        console.log(chalk.bold.yellowBright('📣 Servers - ') + (chalk.italic.greenBright(`${client.guilds.cache.size}`)))
        console.log(chalk.bold.yellowBright('📣 Users - ') + (chalk.italic.greenBright(`${client.users.cache.size}`)))
        console.log(chalk.bold.yellowBright('📣 Status - ') + (chalk.italic.greenBright(`Ready!`)))
//========================================================================================================================================
    }
}