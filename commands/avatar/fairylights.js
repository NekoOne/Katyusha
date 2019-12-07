const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'fairylights',
            aliases: ['fairy'],
            group: 'avatar',
            memberName: 'fairy',
            description: '5.6',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('Fairy Lights')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/f8/34/f83490a1-c200-41a3-8884-07da27d926b8/fire2.png')
    .setFooter('Update 5.6, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
