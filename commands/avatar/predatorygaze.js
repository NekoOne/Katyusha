const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class avatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'predatorygaze',
            aliases: ['gaze'],
            group: 'avatar',
            memberName: 'predatorygaze',
            description: '5.7',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('Predatory Gaze')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/cb/bc/cbbc6812-adba-40e0-86b2-c97aa665562e/wolf.png')
    .setFooter('Update 5.7, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
