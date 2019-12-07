const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class avatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'menacinggrin',
            aliases: ['grin'],
            group: 'avatar',
            memberName: 'menacinggrin',
            description: '5.7',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('Menacing Grin')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/fb/60/fb603299-7e38-42cd-9027-03a97edeeec5/fangs.png')
    .setFooter('Update 5.7, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
