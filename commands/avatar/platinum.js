const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'platinum',
            aliases:['plat'],
            group: 'avatar',
            memberName: 'platinum',
            description: '5.7',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#551A8B')
	.setTitle('Platinum League')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/0b/ca/0bcae13d-d185-4149-99ab-9bc6dedf7ad2/platinum_league.png')
    .setFooter('Update 5.7, Be in Platinum League by the end of a Season (30 Day Exp.)')
        return message.embed(embed);
    }
};