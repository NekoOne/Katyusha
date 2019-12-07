const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ultimatedestroyer1',
            aliases:['ud1'],
            group: 'avatar',
            memberName: 'ultimatedestroyer1',
            description: '6.0',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#ffd700')
	.setTitle('Ultimate Destroyer')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/images/avatar-raseiniai-heroes-medal-1.png')
    .setFooter('Update 6.0, Get 1 Raseiniai Heroes\' Medal')
        return message.embed(embed);
    }
};
