const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class avatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pixeltank',
            aliases:['pixel', 'tank'],
            group: 'avatar',
            memberName: 'pixeltank',
            description: '5.7',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('Pixel Tank')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/18/4d/184d4c8d-cf67-4cf1-8a46-fcb7832897b7/tank8bit.png')
    .setFooter('Update 5.7, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
