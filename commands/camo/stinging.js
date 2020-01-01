const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'stinging',
            aliases: [],
            group: 'camo',
            memberName: 'stinging',
            description: 'Shows the Skorpion G\'s Stinging Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('Skorpion G Stinging')
    .setImage('https://static-ptl-us.gcdn.co/dcont/fb/image/rheinmetall_skorpion_fully_loaded.png')
    .setFooter('Costs 1 590 Gold')
        return message.embed(embed);
    }
};
