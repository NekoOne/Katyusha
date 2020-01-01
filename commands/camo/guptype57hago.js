const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'guptype95hago',
            aliases: ['type95','hago'],
            group: 'camo',
            memberName: 'hago',
            description: 'Shows the Ha-Go\'s Girls und Panzer Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('GuP Type 95 Ha-Go')
    .setImage('https://vignette.wikia.nocookie.net/gup/images/d/d3/Ha-Go.png/revision/latest?cb=20170205021235')
    .setFooter('Cannot be Bought')
        return message.embed(embed);
    }
};
