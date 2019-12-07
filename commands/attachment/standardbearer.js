const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'standardbearer',
            aliases: ['sb'],
            group: 'attachment',
            memberName: 'standardbearer',
            description: 'Shows the T-22 Medium\'s Standard Bearer Attachment',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('T-22 Medium Standard Bearer')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/43/70/43706650-98ba-4d5b-9614-f15a9de0474d/t-22_article_03.jpg')
    .setFooter('Costs 4 000 Gold, Was in Christmas Event of 2018')
        return message.embed(embed);
    }
};
