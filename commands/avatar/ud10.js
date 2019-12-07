const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ultimatedestroyer10',
            aliases:['ud10'],
            group: 'avatar',
            memberName: 'ultimatedestroyer10',
            description: '6.0',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#ffd700')
	.setTitle('Ultimate Destroyer')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/images/avatar-raseiniai-heroes-medal-10.png')
    .setFooter('Update 6.0, Get 10 Raseiniai Heroes\' Medals')
        return message.embed(embed);
    }
};
