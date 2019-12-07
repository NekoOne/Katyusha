const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class avatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'spider',
            group: 'avatar',
            memberName: 'spider',
            description: '5.10',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('Spider')
    .setImage('https://i0.wp.com/media-wbp.wgcdn.co/media/filer_public/images/spider_ppfrnL7.png?ssl=1')
    .setFooter('Update 5.10, Daily Chests, Mission Chests, or Gold and Avatar Chests')
        return message.embed(embed);
    }
};
