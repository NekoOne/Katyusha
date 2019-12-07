const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ding',
            aliases: ['dng'],
            group: 'camo',
            memberName: 'ding',
            description: 'Shows the Type 59\'s Ding Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('Type 59 Ding')
    .setImage('https://i.imgur.com/lcqPjoi.jpg')
    .setFooter('Special Offer Only, Offered at the Way of the Warrior Event')
        return message.embed(embed);
    }
};
