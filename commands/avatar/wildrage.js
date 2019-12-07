const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class avatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'wildrage',
            aliases: ['rage'],
            group: 'avatar',
            memberName: 'wildrage',
            description: '5.7',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('Wild Rage')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/1c/19/1c197050-6850-443d-8426-2e26e7d3333c/wolflion.png')
    .setFooter('Update 5.7, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
