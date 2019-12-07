const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'royalreception',
            aliases: ['rr'],
            group: 'attachment',
            memberName: 'royalreception',
            description: 'Shows the FV217 Badger Esq.\'s Royal Reception Attachment',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('FV217 Badger Esq. Royal Reception')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/4922b91d21a552b4d5b494228ce591ea6f772777.jpg')
    .setFooter('Crate Only')
        return message.embed(embed);
    }
};
