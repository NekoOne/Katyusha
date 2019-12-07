const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'adamant',
            aliases: ['ad'],
            group: 'camo',
            memberName: 'adament',
            description: 'Shows the Adamant Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('STB Adamant')
    .setImage('https://static-wbp-us.gcdn.co/dcont/1.23.2/fb/image/en-spirit.jpg')
    .setFooter('Costs 2 550 Gold')
        return message.embed(embed);
    }
};
