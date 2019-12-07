const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pioneer',
            aliases: ['pn'],
            group: 'attachment',
            memberName: 'pioneer',
            description: 'Shows the IS-6\'s Pioneer Attachment',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('IS-6 Pioneer')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/29b58949d04c2b032004b581204d29c9bfc4c8be.jpg')
    .setFooter('Costs 3 000 Gold, was an event attachment')
        return message.embed(embed);
    }
};
