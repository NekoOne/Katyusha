const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'lucky',
            aliases: ['lc'],
            group: 'camo',
            memberName: 'lucky',
            description: 'Shows the WZ-113G FT\'s Lucky Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('WZ-113G FT Lucky')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/43fb2fa1149ccfce68677e445da7898e5b483274.jpg')
    .setFooter('Costs 2 550 Gold ')
        return message.embed(embed);
    }
};
