const discord = require('discord.js');
const client = new discord.Client();
const ownerID = "440577280952238097";
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

// ============== SETTING OWNER INFO =============== //
const dinfo = JSON.parse(fs.readFileSync("./data.json", "UTF8"));
client.on("message", async msg => {
    if(!msg.guild) return;
    if(msg.author.bot) return;
if(!dinfo) dinfo = {
        owner: "440577280952238097"
    }};

// Test Code //
client.on("message", message => {
  if (message.content === "Are You Ready ?") {
  if (!dinfo.owner.includes(msg.author.id)) return; 
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
