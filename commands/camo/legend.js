const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'legend',
            aliases: ['lg'],
            group: 'camo',
            memberName: 'legend',
            description: 'Shows the IS-6\'s Legends Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('IS-6 Legend')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/ebdb03ea3ab8bfbe9617135b2df177ef423a41df.jpg')
    .setFooter('Costs 1 450 Gold')
        return message.embed(embed);
    }
};
