const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'mirage',
            aliases: ['mr'],
            group: 'maps',
            memberName: 'mirage',
            description: 'Shows Mirage',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#c2b280')
	.setTitle('Mirage')
    .setImage('https://i.imgur.com/ZyW5rkk.png')

        return message.embed(embed);
    }
};
