const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'normandy',
            aliases: ['n'],
            group: 'maps',
            memberName: 'normandy',
            description: 'Shows Normandy',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#013220')
	.setTitle('Normandy')
    .setImage('https://i.imgur.com/DVC51X2.png')

        return message.embed(embed);
    }
};
