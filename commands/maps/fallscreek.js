const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'fallscreek',
            aliases: ['fc'],
            group: 'maps',
            memberName: 'fallscreek',
            description: 'Shows Falls Creek',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#013220')
	.setTitle('Falls Creek')
    .setImage('https://i.imgur.com/lpAHBed.png')

        return message.embed(embed);
    }
};
