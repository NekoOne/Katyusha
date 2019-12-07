const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'alpenstadt',
            aliases: ['as'],
            group: 'maps',
            memberName: 'alpenstadt',
            description: 'Shows Alpenstadt',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#013220')
	.setTitle('Alpenstadt')
    .setImage('https://i.imgur.com/bhVDsuE.png')

        return message.embed(embed);
    }
};
