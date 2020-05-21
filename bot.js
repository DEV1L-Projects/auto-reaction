const discord = require('discord.js');
const client = new discord.Client();
/* 
GiveAway's Auto Reaction
Please Don't Change Anything

By : ! - S O L A R ツ#0096
*/

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`${client.user.username} Is Ready !' `);
   console.log(`----------------`);
});

// Test Code //
client.on("message", message => {
  if (message.content === "Are You Ready ? [322922]") {
    message.channel.send("Yes, Sir !");
  }
});
// Test Code //

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
