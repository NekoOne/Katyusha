const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'knight',
            aliases: ['knt'],
            group: 'camo',
            memberName: 'knight',
            description: 'Shows the Lycan\'s Knight Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('Lycan Knight')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/db2e47ade75dda2021ca290c03ce3888a2773c35.jpg')
    .setFooter('Can No Longer Be Obtained, Part of Halloween 2019 Event at Tier 60')
        return message.embed(embed);
    }
};
