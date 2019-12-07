const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ultimatedestroyer2',
            aliases:['ud2'],
            group: 'avatar',
            memberName: 'ultimatedestroyer2',
            description: '6.0',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#ffd700')
	.setTitle('Ultimate Destroyer')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/images/avatar-raseiniai-heroes-medal-2.png')
    .setFooter('Update 6.0, Get 2 Raseiniai Heroes\' Medals')
        return message.embed(embed);
    }
};
