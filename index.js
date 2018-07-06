const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "f."

client.on('ready', () => {
})   

 

client.on('guildMemberAdd', member => {
    var joinrole = member.guild.roles.find('name', '[F]Member');
    member.addRole(joinrole);
    let channel  = member.guild.channels.find('name', '🎂welcome-goodbye-👋');
    let memberavatar  = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#FF000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Welcome', `Bine ai venit <:flex:458964208348823552> `)
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
