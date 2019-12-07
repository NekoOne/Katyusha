const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'fortdispair',
            aliases: ['fd'],
            group: 'maps',
            memberName: 'fortdispair',
            description: 'Shows Fort Dispair',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#013220')
	.setTitle('Fort Dispair')
    .setImage('https://i.imgur.com/WMiq7y6.png')

        return message.embed(embed);
    }
};
