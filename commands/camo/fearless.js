const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'fearless',
            aliases: ['frl'],
            group: 'camo',
            memberName: 'fearless',
            description: 'Shows the T-62A\'s Fearless Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('T-62A')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public_thumbnails/filer_public/f2/c9/f2c91818-31bc-495d-9c30-cf8faeb85f17/t-62a-fearless-gunner.jpg__1000x625_q85_subsampling-2.jpg')
    .setFooter('2 550')
        return message.embed(embed);
    }
};
