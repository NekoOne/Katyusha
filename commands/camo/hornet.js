const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hornet',
            aliases: ['hn'],
            group: 'camo',
            memberName: 'hornet',
            description: 'Shows the T49\'s Hornet Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('T49 Hornet')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/images/camo-6-0.jpg')
    .setFooter('Costs 1 450 Gold')
        return message.embed(embed);
    }
};
