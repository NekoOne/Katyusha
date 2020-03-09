const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class avatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ultimatedestroyer',
            aliases:['ud'],
            group: 'avatar',
            memberName: 'ultimatedestroyer',
            description: '6.0',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#ffd700')
	.setTitle('Ultimate Destroyer')
    .setImage('https://i.imgur.com/pXcAJFO.png')
    .setFooter('Update 6.0, Get 1, 2, 3, 5, 7, 10, or 15 Raseiniai Heroes\' Medal')
        return message.embed(embed);
    }
};
