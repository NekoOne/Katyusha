const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'uncatchable',
            aliases: ['uca'],
            group: 'camo',
            memberName: 'uncatchable',
            description: 'Shows the T-22\'s Uncatchable Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
        .setColor('RANDOM')
    .setThumbnail('https://i.imgur.com/dBEG4Zz.png')
	.setTitle('T-22 Medium Uncatchable')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/8932aa7a25cb1604af851c1c0f76336559df9a00.jpg')
    .setFooter('Event Camo from Cristmas of 2018, Special Offer Only')
        return message.embed(embed);
    }
};
