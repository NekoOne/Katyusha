const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'winter',
            aliases: ['w'],
            group: 'maps',
            memberName: 'winter',
            description: 'Shows the Unamed Winter Map',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#A5F2F3')
	.setTitle('New Winter Map')
    .setImage('https://pbs.twimg.com/media/EF4dbMlXoAAqIws?format=jpg&name=small')

        return message.embed(embed);
    }
};
