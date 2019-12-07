const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ultimatedestroyer15',
            aliases:['ud15'],
            group: 'avatar',
            memberName: 'ultimatedestroyer15',
            description: '6.0',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#ffd700')
	.setTitle('Ultimate Destroyer')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/images/avatar-raseiniai-heroes-medal-15.png')
    .setFooter('Update 6.0, Get 15 Raseiniai Heroes\' Medals')
        return message.embed(embed);
    }
};
