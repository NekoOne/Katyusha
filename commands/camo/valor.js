const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'valor',
            aliases: ['vl'],
            group: 'camo',
            memberName: 'valor',
            description: 'Shows the Jackson\'s M46 Valor Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('M46 Valor')
    .setImage('https://www.dom1n.com/wp-content/grand-media/image/valiant-jackson-2.jpg')
    .setFooter('Costs 490 Gold')
        return message.embed(embed);
    }
};
