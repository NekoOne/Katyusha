const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'berlin',
            aliases: ['bl'],
            group: 'camo',
            memberName: 'berlin',
            description: 'Shows the Cromwell B\'s Berlin Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('Cromwell B Berlin')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public_thumbnails/filer_public/40/c8/40c83a49-3aed-43f5-871e-f4fd6114d3d7/800x391_cromwellb_2.png__1048x590_q95_subsampling-2.png')
    .setFooter('Costs 650 Gold')
        return message.embed(embed);
    }
};
