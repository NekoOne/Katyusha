const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class avatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'redeagle',
            group: 'avatar',
            memberName: 'redeagle',
            description: '5.7',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('Eagle')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/32/ec/32ecbda0-d2a6-4322-86fd-d5508dae7440/eagle.png')
    .setFooter('Update 5.7, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
