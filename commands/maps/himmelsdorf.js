const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'himmelsdorf',
            aliases: ['hsd'],
            group: 'maps',
            memberName: 'himmelsdorf',
            description: 'Shows Himmelsdorf',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#A5F2F3')
	.setTitle('Himmelsdorf')
    .setImage('https://i.imgur.com/kMUyXur.png')

        return message.embed(embed);
    }
};
