const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: '1000',
            aliases: ['1k'],
            group: 'avatar',
            memberName: '1000',
            description: '6.0',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#0089ca')
	.setTitle('1,000 Victories')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/images/avatar-victories-1000.png')
    .setFooter('Update 6.0, Get 1,000 Victories')
        return message.embed(embed);
    }
};
