const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'copperfield',
            aliases: ['cf'],
            group: 'maps',
            memberName: 'copperfield',
            description: 'Shows Copperfield',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#013220')
	.setTitle('Copperfield')
    .setImage('https://i.imgur.com/Ca0qLJT.png')

        return message.embed(embed);
    }
};
