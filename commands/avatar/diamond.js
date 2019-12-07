const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'diamond',
            aliases:['diam'],
            group: 'avatar',
            memberName: 'diamond',
            description: '5.7',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#DAA520')
	.setTitle('Diamond League')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/d9/05/d905986d-30be-4059-aea3-04e7e7724fbd/diamond_league.png')
    .setFooter('Update 5.7, Be in Diamond League by the end of a Season (30 Day Exp.)')
        return message.embed(embed);
    }
};
