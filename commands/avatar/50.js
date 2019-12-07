const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: '50',
            group: 'avatar',
            memberName: '50',
            description: '6.0',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('50 Victories')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/images/avatar-victories-50.png')
    .setFooter('Update 6.0, Get 50 Victories')
        return message.embed(embed);
    }
};
