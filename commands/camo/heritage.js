const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'heritage',
            aliases: ['hrt'],
            group: 'camo',
            memberName: 'heritage',
            description: 'Shows the Cheiftain/T95\'s Heritage Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('Cheiftain/T95 Heritage')
    .setImage('https://i.imgur.com/g75svFc.jpg')
    .setFooter('Costs 1 450 Gold')
        return message.embed(embed);
    }
};
