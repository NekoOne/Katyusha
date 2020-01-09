const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class rareCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'mk1',
            group: 'rare',
            memberName: 'mk1',
            description: 'Mk.I*Heavy Tank',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#DAA520')
	.setTitle('Mk.I*Heavy Tank')
    .setImage('Missing Permissions')
    .setFooter('Update 6.0, Get 50 Victories')
        return message.embed(embed);
    }
};
