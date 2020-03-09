const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'imperturbable',
            aliases: ['itb'],
            group: 'attachment',
            memberName: 'imperturbable',
            description: 'Shows the IS-2Sh\'s Imperturbable Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
        .setColor('RANDOM')
    .setThumbnail('https://i.imgur.com/9NqzNHu.png')
	.setTitle('IS-2Sh Imperturbable')
    .setImage('https://static-wbp-us.gcdn.co/dcont/1.26.2/fb/image/is-2sh-01.jpg')
    .setFooter('Costs 1 600 Gold')
        return message.embed(embed);
    }
};
