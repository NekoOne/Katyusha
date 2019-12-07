const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'castilla',
            aliases: ['cs'],
            group: 'maps',
            memberName: 'castilla',
            description: 'Shows Castilla',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#013220')
	.setTitle('Castilla')
    .setImage('https://i.imgur.com/Yjx0k9U.png')

        return message.embed(embed);
    }
};
