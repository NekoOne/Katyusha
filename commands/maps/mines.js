const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'mines',
            aliases: ['m'],
            group: 'maps',
            memberName: 'mines',
            description: 'Shows Mines',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#013220')
	.setTitle('Mines')
    .setImage('https://i.imgur.com/BblHkQt.png')

        return message.embed(embed);
    }
};
