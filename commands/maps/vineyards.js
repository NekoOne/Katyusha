const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'vineyards',
            aliases: ['vy'],
            group: 'maps',
            memberName: 'vineyards',
            description: 'Shows Vineyards',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#013220')
	.setTitle('Vineyards')
    .setImage('https://i.imgur.com/k4Qpbf6.png')

        return message.embed(embed);
    }
};
