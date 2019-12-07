const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'bicycle',
            aliases: ['bc'],
            group: 'attachment',
            memberName: 'bicycle',
            description: 'Shows the WZ-113G FT\'s Bicycle Attachment',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('WZ-113G FT\'s Bicycle')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/219ec8d94a40d3f93a66cc574097495a6eaf249a.jpg')
    .setFooter('Costs 1 200 Gold')
        return message.embed(embed);
    }
};
