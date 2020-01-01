const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'aritinga',
            aliases: [],
            group: 'camo',
            memberName: 'aratinga',
            description: 'Shows the 59-Pattons\'s Aratinga Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('GREEN')
	.setTitle('59-Patton Aratinga')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/500cea65e630129401db52f988922132bae4c057.jpg')
    .setFooter('Obtained by Compleating the 2019 Wind of Wins Event')
        return message.embed(embed);
    }
};
