const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'predatory',
            aliases: ['pt'],
            group: 'camo',
            memberName: 'predatory',
            description: 'Shows the T26E4 SuperPershing\'s Predatory Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('T26E4 SuperPershing Predatory')
    .setImage('https://www.dom1n.com/wp-content/grand-media/image/zveroboy_hunter__camouflage_screenshot_superpershing_2.jpg')
    .setFooter('Costs 1 450 Gold')
        return message.embed(embed);
    }
};
