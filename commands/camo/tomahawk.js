const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'tomahawk',
            aliases: ['tmh'],
            group: 'camo',
            memberName: 'tomahawk',
            description: 'Shows the Chrysler K\'s Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('Chrysler K Tomahawk')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/82761d7a890b8abb37fd388bf7180274a9e19201.jpg')
    .setFooter('Comes With Tank When bought')
        return message.embed(embed);
    }
};
