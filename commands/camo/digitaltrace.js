const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'digitaltrace',
            aliases: ['dtt'],
            group: 'camo',
            memberName: 'digitaltrace',
            description: 'Shows the Type 59\'s Digital Trace Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('Type 59 Digital Trace')
    .setImage('https://i.postimg.cc/7Z6XrZ4X/Wo-T-Blitz-28-11-2018-18-03-24-Type-59-camo.png')
    .setFooter('Costs 620 Gold, Offered at the Way of the Warrior Event')
        return message.embed(embed);
    }
};
