const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'eagle',
            aliases: ['eg'],
            group: 'camo',
            memberName: 'eagle',
            description: 'Shows the E 75\'s Eagle Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('E 75 TS Eagle')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/35ca6795adbfaefc4f3c0f9f8d9ffd125f7bedfb.jpg')
    .setFooter('Costs 1 450 Gold')
        return message.embed(embed);
    }
};
