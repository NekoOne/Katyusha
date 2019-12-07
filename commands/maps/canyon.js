const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'canyon',
            aliases: ['c'],
            group: 'maps',
            memberName: 'canyon',
            description: 'Shows Canyon',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#A5F2F3')
	.setTitle('Canyon')
    .setImage('https://i.imgur.com/fIhDg0T.png')

        return message.embed(embed);
    }
};
