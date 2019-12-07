const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'fearless',
            aliases: ['frl'],
            group: 'camo',
            memberName: 'fearless',
            description: 'Shows the Fearless Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('IS-6 Fearless')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/ebdb03ea3ab8bfbe9617135b2df177ef423a41df.jpg')
    .setFooter('Rare Tank, Camo Comes With Tank')
        return message.embed(embed);
    }
};
