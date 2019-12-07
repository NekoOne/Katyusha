const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'reliantcover',
            aliases: ['sc'],
            group: 'attachment',
            memberName: 'reliantcover',
            description: 'Shows the Löwe\'s Reliant Cover Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('Löwe Reliant Cover')
    .setImage('https://i1.wp.com/media-wbp.wgcdn.co/media/filer_public_thumbnails/filer_public/bb/db/bbdbf4e0-1282-4464-b5ba-4ed8ba919a54/lowe-skin.jpg__1200x757_q85_crop_subsampling-2_upscale.jpg?w=780&ssl=1')
    .setFooter('Costs 1 450 Gold')
        return message.embed(embed);
    }
};
