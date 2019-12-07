const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'navelfrontier',
            aliases: ['nf'],
            group: 'maps',
            memberName: 'navelfrontier',
            description: 'Shows Navel Frontier',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#013220')
	.setTitle('Navel Frontier')
    .setImage('https://i.imgur.com/ZKBydux.png')

        return message.embed(embed);
    }
};
