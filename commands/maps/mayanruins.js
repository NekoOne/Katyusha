const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'mayanruins',
            aliases: ['myr'],
            group: 'maps',
            memberName: 'mayanruins',
            description: 'Shows Mayan Ruins',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#013220')
	.setTitle('Mayan Ruins')
    .setImage('https://i.imgur.com/xi5acCY.png')

        return message.embed(embed);
    }
};
