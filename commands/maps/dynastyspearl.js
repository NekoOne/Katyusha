const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dynastyspearl',
            aliases: ['dp'],
            group: 'maps',
            memberName: 'dynastyspearl',
            description: 'Shows Dynastys Pearl',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#013220')
	.setTitle('Dynastys Pearl')
    .setImage('https://i.imgur.com/H3M5GoD.png')

        return message.embed(embed);
    }
};
