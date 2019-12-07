const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'esquire',
            aliases: ['eq'],
            group: 'camo',
            memberName: 'esquire',
            description: 'Shows the FV217 Badger\'s Esquire Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('FV217 Badger Esq.')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/7483e174585491209223660e848988cadcfd7cc8.jpg')
    .setFooter('Crate Only')
        return message.embed(embed);
    }
};
