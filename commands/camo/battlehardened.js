const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'battlehardened',
            aliases: ['bh'],
            group: 'camo',
            memberName: 'battlehardened',
            description: 'Shows the Battle Hardened Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('IS-7 Battle-Hardened')
    .setImage('https://static-wbp-us.gcdn.co/dcont/1.23.2/fb/image/en-hardened.jpg')
    .setFooter('Costs 2 550 Gold')
        return message.embed(embed);
    }
};
