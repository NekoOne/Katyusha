const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'blackgoldville',
            aliases: ['bg'],
            group: 'maps',
            memberName: 'blackgoldville',
            description: 'Shows Blackgoldville',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#c2b280')
	.setTitle('Blackgoldville')
    .setImage('https://i.imgur.com/xBWQxIi.png')

        return message.embed(embed);
    }
};
