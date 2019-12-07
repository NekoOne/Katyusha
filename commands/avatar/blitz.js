const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class avatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'blitz',
            group: 'avatar',
            memberName: 'blitz',
            description: '5.6',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('Blitz')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/1e/23/1e2338fc-a2a7-4f6d-a236-cfd9a1156e71/blitz.png')
    .setFooter('Update 5.6, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
