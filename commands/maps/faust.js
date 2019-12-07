const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'faust',
            aliases: ['f'],
            group: 'maps',
            memberName: 'faust',
            description: 'Shows Faust',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#A5F2F3')
	.setTitle('Faust')
    .setImage('https://i.imgur.com/snJ9gmB.png')

        return message.embed(embed);
    }
};
