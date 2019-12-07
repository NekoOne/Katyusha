const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'falcon',
            aliases: ['fal'],
            group: 'camo',
            memberName: 'falcon',
            description: 'Shows the T34\'s Falcon Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('T-34 Falcon')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public_thumbnails/filer_public/7e/af/7eaf145a-b613-447e-ba87-477eca8071bf/t34-falcon-3.jpg__1000x625_q85_subsampling-2.jpg')
    .setFooter('1 590')
        return message.embed(embed);
    }
};
