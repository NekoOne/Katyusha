const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'nomad',
            aliases: ['nm'],
            group: 'camo',
            memberName: 'nomad',
            description: 'Shows the T23E3\'s Nomad Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('T23E3 Nomad')
    .setImage('https://thedailybounce.net/t23e3-1/')
    .setFooter('Special Offer Only')
        return message.embed(embed);
    }
};
