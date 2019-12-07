const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'losttemple',
            aliases: ['lt'],
            group: 'maps',
            memberName: 'losttemple',
            description: 'Shows Lost Temple',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#013220')
	.setTitle('Lost Temple')
    .setImage('https://i.imgur.com/kB1oRrA.png')

        return message.embed(embed);
    }
};
