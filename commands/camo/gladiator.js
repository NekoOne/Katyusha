const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'gladiator',
            aliases: ['gld'],
            group: 'camo',
            memberName: 'gladiator',
            description: 'Shows the Progetto M40 mod. 65\'s Gladiator Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('Progetto M40 mod. 65 Gladiator')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/68598b6ceb9b29c11ac6b76cce1a48ab3960d348.jpg')
    .setFooter('Costs 2 550 Gold')
        return message.embed(embed);
    }
};
