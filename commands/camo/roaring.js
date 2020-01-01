const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'roaring',
            aliases: ['ri'],
            group: 'camo',
            memberName: 'roaring',
            description: 'Shows the E 50 M\'s Roaring Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
    .setTitle('E 50 M Roaring')
    .setURL('https://twitter.com/WoTBlitz/status/1194982483026157568')
    .setImage('https://pbs.twimg.com/media/EJVuOu5WkAITRA8?format=jpg&name=large')
    .setFooter('Costs 2 840 Gold')
        return message.embed(embed);
    }
};
