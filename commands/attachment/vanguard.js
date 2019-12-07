const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'vanguard',
            aliases: ['vg'],
            group: 'camo',
            memberName: 'vanguard',
            description: 'Shows the Chrysler K Tomahawk\'s Attachment',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('Chrysler K Tomahawk Vanguard')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/ee0844a91731370754ece039cb107b6bc3857f6e.jpg')
    .setFooter('Comes With Tank When bought')
        return message.embed(embed);
    }
};
