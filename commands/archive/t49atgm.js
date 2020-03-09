const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class rareCommand extends Command {
    constructor(client) {
        super(client, {
            name: 't49atgm',
            group: 'archive',
            memberName: 'atgm',
            description: 'T49 ATGM',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#DAA520')
	.setTitle('T49 ATGM')
    .setImage('https://media.giphy.com/media/KDo0NpYFWfcCiXULJo/giphy.gif')
    .setFooter('Came out for a Limited Time During the Missile Exercise Event')
        return message.embed(embed);
    }
};
