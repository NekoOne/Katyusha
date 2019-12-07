const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class avatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'snowman',
            aliases: ['man'],
            group: 'avatar',
            memberName: 'snowman',
            description: '5.6',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('Snowman')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/4b/f4/4bf4852c-0bca-473e-a66a-b282878f0802/snowman.png')
    .setFooter('Update 5.6, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
