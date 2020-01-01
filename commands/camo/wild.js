const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'wild',
            aliases: [],
            group: 'camo',
            memberName: 'wild',
            description: 'Shows the Leopard 1\'s Wild Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('Leopard 1 Wild')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/52450202eb8d3ad2069e3abeb5479c1e2ded31b9.jpg')
    .setFooter('Update 5.8; Costs 2 550 Gold')
        return message.embed(embed);
    }
};
