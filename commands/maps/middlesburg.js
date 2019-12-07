const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'middlesburg',
            aliases: ['mb'],
            group: 'maps',
            memberName: 'middlesburg',
            description: 'Shows Middlesburg',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#013220')
	.setTitle('Middlesburg')
    .setImage('https://i.imgur.com/Iuyeqvp.png')

        return message.embed(embed);
    }
};
