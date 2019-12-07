const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'portbay',
            aliases: ['pb'],
            group: 'maps',
            memberName: 'portbay',
            description: 'Shows Portbay',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#013220')
	.setTitle('Portbay')
    .setImage('https://i.imgur.com/1pVvJzT.png')

        return message.embed(embed);
    }
};
