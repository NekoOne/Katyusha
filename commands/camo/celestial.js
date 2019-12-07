const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'celestial',
            aliases: ['clt'],
            group: 'camo',
            memberName: 'celestial',
            description: 'Shows the WZ-112-2\'s Celestial Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('WZ-112-2 Celestial')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/792a40b3684e11dbf8e6fb6b7d2ffc06bbbca805.jpg')
    .setFooter('Costs 1 450 Gold')
        return message.embed(embed);
    }
};
