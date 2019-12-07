const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'canal',
            aliases: ['cl'],
            group: 'maps',
            memberName: 'canal',
            description: 'Shows Canal',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#013220')
	.setTitle('Canal')
    .setImage('https://i.imgur.com/spTV8vE.png')

        return message.embed(embed);
    }
};
