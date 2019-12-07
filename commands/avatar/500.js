const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: '500',
            group: 'avatar',
            memberName: '500',
            description: '6.0',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#0089ca')
	.setTitle('500 Victories')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/images/avatar-victories-500.png')
    .setFooter('Update 6.0, Get 500 Victories')
        return message.embed(embed);
    }
};
