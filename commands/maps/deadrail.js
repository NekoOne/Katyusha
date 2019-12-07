const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'deadrail',
            aliases: ['dr'],
            group: 'maps',
            memberName: 'deadrail',
            description: 'Shows Dead Rail',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#A5F2F3')
	.setTitle('Dead Rail')
    .setImage('https://i.imgur.com/DtSZrki.png')

        return message.embed(embed);
    }
};
