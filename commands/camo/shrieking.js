const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'shrieking',
            aliases: ['sk'],
            group: 'camo',
            memberName: 'shrieking',
            description: 'Shows the M4A3E8 Shrieking Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('M4A3E8 Shrieking')
    .setImage('https://i.redd.it/uap3hdpdj4oy.jpg')
    .setFooter('Costs 650 Gold')
        return message.embed(embed);
    }
};
