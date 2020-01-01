const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'threat',
            aliases: [],
            group: 'camo',
            memberName: 'threat',
            description: 'Shows the T-54\'s Threat Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('T-54 Threat')
    .setImage('http://wotblitzclan.weebly.com/uploads/6/9/2/0/69206299/t-54-covert-threat-2-jpg-1000x625-q85-subsampling-2_orig.jpg')
    .setFooter('Costs 1 890 Gold')
        return message.embed(embed);
    }
};
