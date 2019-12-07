const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'wintermalinovka',
            aliases: ['wm'],
            group: 'maps',
            memberName: 'wintermalinovka',
            description: 'Shows Winter Malinovka',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#A5F2F3')
	.setTitle('Winter Malinovka')
    .setImage('https://i.imgur.com/znKdPUq.png')

        return message.embed(embed);
    }
};
