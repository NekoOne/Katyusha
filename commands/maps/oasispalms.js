const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'oasispalms',
            aliases: ['oap'],
            group: 'maps',
            memberName: 'oasispalms',
            description: 'Shows Oasis Palms',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#c2b280')
	.setTitle('Oasis Palms')
    .setImage('https://i.imgur.com/fzsSCOT.png')

        return message.embed(embed);
    }
};
