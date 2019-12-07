const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'menacing',
            aliases: ['mc'],
            group: 'camo',
            memberName: 'menacing',
            description: 'Shows the KV-2\'s Menacing Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
    .setTitle('KV-2 Menacing')
    .setImage('')
    .setFooter('Costs 650 Gold')
        return message.embed(embed);
    }
};
