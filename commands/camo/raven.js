const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'raven',
            aliases: [],
            group: 'attachment',
            memberName: 'raven',
            description: 'Shows the Helsing\'s Raven Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
        .setColor('BLACK')
    .setThumbnail('https://i.imgur.com/7YRmJwR.png')
	.setTitle('Helsing Raven')
    .setImage('https://i.imgur.com/NIeCeIr.png')
    .setFooter('Could of Dropped in a Helsing Crate During 2019 Halloween Event')
        return message.embed(embed);
    }
};
