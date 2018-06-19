const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "f?"

client.on('ready', () => {
  client.user.setGame('f!help/f?help ')
})   

  client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith(prefix+ "say")) {
    message.delete()
    const embed = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor(0xFF000)
   message.channel.sendEmbed(embed);
  }

});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith(prefix+ "help")) {
    const embed = new Discord.RichEmbed()
    .setTitle('BOT INFO')
    .setDescription(`•prefix --> f?/f!

BOT COMMANDS

• || f?mass || f?support || f?info || f?say || f?ping || f?serverinfo || f?restart || more commands f!help `)
    .setColor(0xFF000)
   message.channel.sendEmbed(embed);
  }

});

client.on('message', message => {
    if (message.author.id == '419472407816830986') {
    if (message.content.startsWith(`f?restart`)) {
            resetBot(message.channel);
    }
  }
});

// Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Restarting...')
    .then(msg => bot.destroy())
    .then(() => bot.login(process.env.TOKEN));
}

 

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if ( message.content.startsWith(prefix+ "ping")) {
    let embed = new Discord.RichEmbed()
            .setTitle('Ping')
            .setDescription(`\`\`\`md\nPing :${client.ping}ms\`\`\``)
            .setColor(0x4caf50)
            .setFooter('Bot pinged')
            .setTimestamp()
        
        message.channel.send(embed);
  }
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if (message.content.startsWith(prefix + 'serverinfo')) {
  const embed = new Discord.RichEmbed()
  embed.addField('Members', message.guild.memberCount, true)
  embed.addField('Name', message.guild.name, true)
  embed.addField('Region', message.guild.region, true)
  embed.addField('Owner', message.guild.owner, true)
  embed.addField('ID', message.guild.id, true)
  embed.setColor(`ff0000`)
  embed.setThumbnail(message.guild.iconURL)
  message.channel.sendEmbed(embed)
}
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith("https://discord.gg")) {
    message.delete()
    let embed = new Discord.RichEmbed()
            .setTitle('No Invite Link')
            .setColor(0xff0000)
            .setFooter('No invite link!')
            .setTimestamp()
        
        message.channel.send(embed);
  }

});  

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if ( message.content.startsWith(prefix+ "avatar")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(`${user.username}`)
    .setImage(user.displayAvatarURL)
    .setColor('RANDOM')
    
   message.channel.send(embed);
  }

});     
    
  client.on('message', message => {    
    if(message.content.startsWith('f?mass')) {
    if(message.author.id === "419472407816830986" ||
message.author.id === "404708655578218511"){
       let args = message.content.split(" ").slice(1);         
       var argresult = args.join(" ")      
const argsresult = args.join(" ")         
       let reason = args.join(" ")                   
    if(!args[1]) {  }  
    if(args[1]) { 
message.channel.guild.members.forEach(member => {{ 
member.send(reason)
message.delete() }})}}} });

client.on('message', msg => {
    if (msg.content === 'f!invite') {
      msg.channel.send('Invite **Flex** https://discordapp.com/oauth2/authorize?client_id=458665847012196352&permissions=8&scope=bot  :tada:');
    }
  });

client.on('message', msg => {
    if (msg.content === 'f?support') {
      msg.channel.send('support server ---> https://discord.gg/GF3RWsd');
    }
  });

client.on('message', msg => {
    if (msg.content === 'f?info') {
      msg.channel.send('creatorul meu este : <@419472407816830986> si <@404708655578218511> ');
    }
  });

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '🎂welcome-goodbye-👋');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#FF000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Welcome', `Bine ai venit`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

client.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', '🎂welcome-goodbye-👋');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Bye -', `La revedere , ne  vom revedea`)
        .setTimestamp()

        channel.sendEmbed(embed);
});


client.login(process.env.TOKEN);
