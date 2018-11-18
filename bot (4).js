const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = ".K";

client.on('ready', () => {
  console.log(`Logged in as ${client.Vll.3888}!`);  
});

client.on('ready', async() => {
var server = "509357857666236430"; //504578013485334529
var channel = "509357857666236434";//504578013938188294
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**#Daily **')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login(process.env.NDA4MjcyODU4MjIyMDM0OTU0.DtMAXw.yPiiBxfhdYVajZr_oauZx_vkyiU);
