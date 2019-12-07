const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'royaltreatment',
            aliases: ['rt'],
            group: 'attachment',
            memberName: 'royaltreatment',
            description: 'Shows the FV4005\'s Royal Treatment Attachment',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('FV4005 Royal Treatment')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/5ea9f0be6d35830d66c7a1e3a9a0f8a1c6ac5a5b.jpg')
    .setFooter('Costs 4 000 Gold')
        return message.embed(embed);
    }
};
