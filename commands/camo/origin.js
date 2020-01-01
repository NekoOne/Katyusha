const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'origin',
            aliases: [],
            group: 'camo',
            memberName: 'origin',
            description: 'Shows the T-54 Mod 1\'s Origin Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('T-54 Mod 1 Origin')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/f83274052a3c33d9e1104c12eab451b7387190f7.jpg')
    .setFooter('Costs 1 450 Gold')
        return message.embed(embed);
    }
};
