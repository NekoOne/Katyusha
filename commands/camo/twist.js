const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'crueltwist',
            aliases: ['ct'],
            group: 'camo',
            memberName: 'crueltwist',
            description: 'Shows the leKpz M 41 90 mm\'s Cruel Twist Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('leKpz M 41 90 mm Cruel Twist')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public_thumbnails/filer_public/17/cb/17cbbc87-90fb-49b6-90fb-303dd3acb53e/lekpzm4190mm-preview.jpg__523x256_q95_subsampling-2.jpg')
    .setFooter('Event Camo, Special Offer Only')
        return message.embed(embed);
    }
};
