const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'rebel',
            aliases: ['rb'],
            group: 'camo',
            memberName: 'rebel',
            description: 'Shows the Rebel Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('T110E5 Rebel')
    .setImage('https://static-wbp-us.gcdn.co/dcont/1.23.2/fb/image/en-rebel.jpg')
    .setFooter('Costs ---- Gold')
        return message.embed(embed);
    }
};
