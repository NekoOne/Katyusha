const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hunter',
            aliases: ['ht'],
            group: 'camo',
            memberName: 'hunter',
            description: 'Shows the ISU-152\'s Hunter Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('ISU-152 Hunter')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/3ac38c7c183354a08bea44d1ff63109e7881494a.jpg')
    .setFooter('Costs 1 450 Gold')
        return message.embed(embed);
    }
};
