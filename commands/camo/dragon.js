const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dragon',
            aliases: ['dg'],
            group: 'camo',
            memberName: 'dragon',
            description: 'Shows the Type 62\'s Dragon Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('Type 62 Dragon')
    .setImage('https://pbs.twimg.com/media/CauSdphXEAAWz0o.jpg:large')
    .setFooter('add')
        return message.embed(embed);
    }
};
