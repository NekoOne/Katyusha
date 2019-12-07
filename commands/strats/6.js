const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class stratCommand extends Command {
    constructor(client) {
        super(client, {
            name: '6',
            aliases: ['tier6'],
            group: 'strats',
            memberName: 'tier6',
            description: 'Shows all Tourney Worthy Tier 6 Tanks',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('Tier 6', true)
    .addField('__Light__', 'Vk 28.01, MT-25', true)
    .addBlankField(true)
    .addField('__Medium__', 'Cromwell B, Pz. IV S.', true)
    .addBlankField(true)
    .addField('__Heavy__','KV-1S, ARL 44, Kuro Mori Mine, Tiger 131, T-150', true)
    .addBlankField(true)
    .addField('__TD__', 'SU-100', true)
    .setFooter('This Info Could Not Be Acurrate And Be Subject To Change.')
       
    return message.embed(embed);
    }
};
