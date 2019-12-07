const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'claw',
            aliases: ['ic'],
            group: 'camo',
            memberName: 'claw',
            description: 'Shows the SU-76I\'s Ice-Claw Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('SU-76I Ice-Claw')
    .setImage('https://i.ytimg.com/vi/7iPeiaByezY/hqdefault.jpg')
    .setFooter('Costs 220 Gold, Was in the April Reserves Event')
        return message.embed(embed);
    }
};
