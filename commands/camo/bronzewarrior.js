const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'bronzewarrior',
            aliases: ['bw'],
            group: 'camo',
            memberName: 'bronzewarrior',
            description: 'Shows the WZ-113\'s Bronze Warrior Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('WZ-113 Bronze Warrior')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/368532861d54db055098882b0aa531286b396d8b.jpg')
    .setFooter('Costs 2 550 Gold')
        return message.embed(embed);
    }
};
