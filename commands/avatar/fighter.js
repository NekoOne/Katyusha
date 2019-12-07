const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class avatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'fighter',
            group: 'avatar',
            memberName: 'fighter',
            description: '5.7',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('Fighter')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/9e/09/9e0929ea-61ef-47ad-9fe6-7aa110a6e1ca/soldier.png')
    .setFooter('Update 5.7, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
