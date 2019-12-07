const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'guardian',
            aliases: ['gd'],
            group: 'camo',
            memberName: 'guardian',
            description: 'Shows the IS-5\'s Clan Guardian Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('IS-5 Clan Guardian')
    .setImage('https://i.ytimg.com/vi/L6oPkb07ZO0/maxresdefault.jpg')
    .setFooter('Costs 1 450 Gold')
        return message.embed(embed);
    }
};
