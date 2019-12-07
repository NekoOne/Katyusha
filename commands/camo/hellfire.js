const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hellfire',
            aliases: ['hf'],
            group: 'camo',
            memberName: 'hellfire',
            description: 'Shows the T-44-100\'s Hellfire Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('T-44-100 Hellfire')
    .setImage('https://cdn.wikiwiki.jp/to/w/wotblitz/T-44-100/::attach/_20190513_032912.JPG')
    .setFooter('Costs 1 450 Gold')
        return message.embed(embed);
    }
};
