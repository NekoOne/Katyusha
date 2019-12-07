const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'gold',
            group: 'avatar',
            memberName: 'gold',
            description: '5.7',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#0089ca')
	.setTitle('Gold League')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/e1/b6/e1b6ee3a-7646-4ed3-b79c-5f5e740dfe38/gold_league.png')
    .setFooter('Update 5.7, Be in Gold League by the end of a Season (30 Day Exp.)')
        return message.embed(embed);
    }
};
