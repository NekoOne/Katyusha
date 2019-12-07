const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'newbay',
            aliases: ['nb'],
            group: 'maps',
            memberName: 'newbay',
            description: 'Shows New Bay',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#013220')
	.setTitle('New Bay')
    .setImage('https://i.imgur.com/QBAKNJK.png')

        return message.embed(embed);
    }
};
