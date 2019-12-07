const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'desertsands',
            aliases: ['ds'],
            group: 'maps',
            memberName: 'desertsands',
            description: 'Shows Desert Sands',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#c2b280')
	.setTitle('Desert Sands')
    .setImage('https://i.imgur.com/ibl57ZY.png')

        return message.embed(embed);
    }
};
