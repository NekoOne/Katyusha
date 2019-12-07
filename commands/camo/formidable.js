const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'formidable',
            aliases: ['fdb'],
            group: 'camo',
            memberName: 'formidable',
            description: 'Shows the 59-Patton\'s Formidable Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('59-Patton Formaidable')
    .setImage('https://pbs.twimg.com/media/ECqE2wOXUAAm7hX?format=jpg&name=small')
    .setFooter('Event Camo From Winds of Wins, Cannot Be Obtained')
        return message.embed(embed);
    }
};
