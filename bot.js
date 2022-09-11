const Discord = require('discord.js');
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Your Heart ❤️');
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong!');
  }
});

client.on('message', (message) => {
  if( message.channel.id == process.env.PAMERNOKO_CHANNEL_ID ){
    if( message.author.bot || !message.attachments.first() ) message.delete();
    else{
      message.react('👍').then(() => message.react('❤️')).then(() => message.react('😆')).then(() => message.react('😮')).then(() => message.react('😢')).then(() => message.react('😡'))
    }
    return;
  }
  else if( message.channel.id == process.env.RUMAHAN_CHANNEL_ID && !message.author.bot ){
    const attachment =  message.attachments.first()
    if( attachment && attachment.url.match(/\.(jpg|png)$/) ){
      console.log(attachment.url)
      console.log(message.guild.bannerURL())
      message.guild.setBanner(attachment.url).then(res=>{console.log('banner changed')}).catch(err=>console.log(err));
    }
  }
});

client.login(process.env.BOT_TOKEN);
