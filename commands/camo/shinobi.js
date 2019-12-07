const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'shinobi',
            aliases: ['sn'],
            group: 'camo',
            memberName: 'shinobi',
            description: 'Shows the Type 2 Chi-Nu Kai\'s Shinobi Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('Type 2 Chi-Nu Kai Shinobi')
    .setImage('http://i.imgur.com/sVAtA2P.jpg')
    .setFooter('Super Rare Tank, Hasn\'t Been in Store Since 2015')
        return message.embed(embed);
    }
};
