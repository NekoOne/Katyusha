const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'royal',
            aliases: ['ry'],
            group: 'camo',
            memberName: 'royal',
            description: 'Shows the Chieftain MK.6 Royal Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('Chieftain MK.6 Royal')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/3b23244be5b3a0e6630e21dc6617b68f390ce904.jpg')
    .setFooter('Costs 2 840 Gold')
        return message.embed(embed);
    }
};
