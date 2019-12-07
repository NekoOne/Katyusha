const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'twinklinglights',
            aliases: ['lights', 'twinkling'],
            group: 'avatar',
            memberName: 'twinkling',
            description: '5.6',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('Twinkling Lights')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/da/d0/dad078a7-193d-4880-a3ab-f3b1fdc623a7/fire.png')
    .setFooter('Update 5.6, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
