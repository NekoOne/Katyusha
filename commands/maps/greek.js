const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'unamed',
            aliases: ['gc'],
            group: 'maps',
            memberName: 'new',
            description: 'Shows Shows an Unamed Map That Resembles Greece',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#c2b280')
	.setTitle('Unamed')
    .setImage('')

        return message.embed(embed);
    }
};
