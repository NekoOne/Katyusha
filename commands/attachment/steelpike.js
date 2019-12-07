const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'steelpike',
            aliases: ['sp'],
            group: 'attachment',
            memberName: 'steelpike',
            description: 'Shows the IS-3\'s Steel Pike Attachment',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('IS-3 Steel Pike')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/fac4abae78c982685f5732f0c74ad5035a5084aa.jpg')
    .setFooter('Costs 3 000 Gold')
        return message.embed(embed);
    }
};
