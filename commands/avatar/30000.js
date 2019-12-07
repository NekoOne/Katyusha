const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: '30000',
            aliases:['30k'],
            group: 'avatar',
            memberName: '30000',
            description: '6.0',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#DAA520')
	.setTitle('30,000 Victories')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/images/avatar-victories-30000.png')
    .setFooter('Update 6.0, Get 30,000 Victories')
        return message.embed(embed);
    }
};
