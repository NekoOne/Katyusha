const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'yourock',
            aliases: ['yr'],
            group: 'camo',
            memberName: 'yourock',
            description: 'Shows the FV201 (A45)\'s You Rock! Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('FV201 (A45) You Rock!')
    .setImage('https://pbs.twimg.com/media/DwtAe84XQAALaid?format=jpg&name=small')
    .setFooter('Costs 1 070 Gold, Event Camo')
        return message.embed(embed);
    }
};
