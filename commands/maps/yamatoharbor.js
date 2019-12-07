const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'yamatoharbor',
            aliases: ['yh'],
            group: 'maps',
            memberName: 'yamatoharbor',
            description: 'Shows Yamato Harbor',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#013220')
	.setTitle('Yamato Habor')
    .setImage('https://i.imgur.com/gF2YBGU.png')

        return message.embed(embed);
    }
};
