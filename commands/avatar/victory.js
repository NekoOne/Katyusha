const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class avatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'victory',
            aliases:[],
            group: 'avatar',
            memberName: 'victory',
            description: '6.0',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#DAA520')
	.setTitle('Victory Avatars')
    .setImage('https://i.imgur.com/HfBPAf0.png')
    .setFooter('Update 6.0, Get 50-50,000 Victories')
        return message.embed(embed);
    }
};
