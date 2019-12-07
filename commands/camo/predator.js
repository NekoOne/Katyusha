const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'predator',
            aliases: ['stp'],
            group: 'camo',
            memberName: 'predator',
            description: 'Shows the Maus\'s Steel Predator Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('Maus Steel Predator')
    .setImage('https://pbs.twimg.com/media/DUc4DwCWsAAkkbb.jpg')
    .setFooter('Costs 2 550 Gold')
        return message.embed(embed);
    }
};
