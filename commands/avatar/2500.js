const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: '2500',
            aliases:['25k'],
            group: 'avatar',
            memberName: '2500',
            description: '6.0',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#551A8B')
	.setTitle('2,500 Victories')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/images/avatar-victories-2500.png')
    .setFooter('Update 6.0, Get 2,500 Victories')
        return message.embed(embed);
    }
};
