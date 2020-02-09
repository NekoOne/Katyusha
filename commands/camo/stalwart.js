const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'stalwart',
            aliases: ['sw'],
            group: 'camo',
            memberName: 'stalwart',
            description: 'Shows the Stalwart Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
        .setColor('RANDOM')
    .setThumbnail('https://i.imgur.com/2YxaiNM.png')
	.setTitle('E100 Stalwart')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/a6/59/a6596219-51a5-4f17-9ced-7c9696c06318/update41-camouflage-02.jpg')
    .setFooter('Costs 2 840 Gold')
        return message.embed(embed);
    }
};
