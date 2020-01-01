const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'combatstar',
            aliases: [],
            group: 'camo',
            memberName: 'combatstar',
            description: 'Shows the T110E4\'s Combat Star Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('T110E4 Combat Star')
    .setImage('https://pbs.twimg.com/media/ELbfvB1XsAAuQF8.jpg')
    .setFooter('Update 6.6; Costs 2 550 Gold')
        return message.embed(embed);
    }
};
