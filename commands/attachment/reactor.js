const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: '50000',
            aliases:['50k'],
            group: 'avatar',
            memberName: '50000',
            description: '6.0',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
        .setColor('#DAA520')
    .setAuthor('Animated!')
	.setTitle('Y5 Nuclear Reactor')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/a2e4b2aeda64f76ceafd135920d7d8b8914c74c7.gif')
    .setFooter('2019 Blitz Birthday Event, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
