const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hammer',
            aliases: [],
            group: 'camo',
            memberName: 'hammer',
            description: 'Shows the FV215B 183\'s Hammer Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('FV215B 183 Hammer')
    .setImage('https://www.dom1n.com/wp-content/grand-media/image/n8g8JEQ376g.jpg')
    .setFooter('Costs 2 250 Gold')
        return message.embed(embed);
    }
};
