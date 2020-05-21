const discord = require('discord.js');
const client = new discord.Client();
/* 
GiveAway's Auto Reaction
Please Don't Change Anything

By : ! - S O L A R ツ#0096
*/

// ======================================================= //

// GiveAwayBot
client.on('message', message => {
    if (message.author.id !== '294882584201003009') return;
    message.react('🤔');
});

// ======================================================= //

// Santa Wumpus
client.on('message', message => {
    if (message.author.id !== '582537632991543307') return;
    message.react('🤔');
});

// ======================================================= //

client.login(process.env.BOT_TOKEN);
