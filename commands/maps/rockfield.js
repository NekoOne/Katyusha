const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'rockfield',
            aliases: ['rf'],
            group: 'maps',
            memberName: 'rockfield',
            description: 'Shows Rockfield',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#013220')
	.setTitle('Rockfield')
    .setImage('https://i.imgur.com/FmqLIMI.png')

        return message.embed(embed);
    }
};
