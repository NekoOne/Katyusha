const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: '250',
            group: 'avatar',
            memberName: '250',
            description: '6.0',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('250 Victories')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/images/avatar-victories-250.png')
    .setFooter('Update 6.0, Get 250 Victories')
        return message.embed(embed);
    }
};
