const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'twofaced',
            aliases: [],
            group: 'attachment',
            memberName: 'twofaced',
            description: 'Shows the Dracula\'s Two-Faced Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('BLACK')
	.setTitle('Dracula Two-Faced')
    .setImage('https://i.imgur.com/HZgmqs7.png')
    .setFooter('Could of Dropped in a Dracula Crate During 2019 Halloween Event')
        return message.embed(embed);
    }
};
