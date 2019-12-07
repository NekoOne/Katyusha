const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'exceptionalfighter',
            aliases: ['ef'],
            group: 'camo',
            memberName: 'exceptionalfighter',
            description: 'Shows the T-44\'s Exceptional Fighter Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('T-44 Exceptional Fighter Camo')
    .setImage('https://pbs.twimg.com/media/DtP82C5WsAQKCr8.jpg')
    .setFooter('Costs 1 450 Gold')
        return message.embed(embed);
    }
};
