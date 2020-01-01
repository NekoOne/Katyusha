const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'invincible',
            aliases: [],
            group: 'camo',
            memberName: 'invincible',
            description: 'Shows the 121B\'s Invincible Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('121B Invincible')
    .setImage('https://truth.bahamut.com.tw/s01/201903/5317632dcf8e72deeb43c3a308cf9fa6.JPG')
    .setFooter('Came out June 3rd with the Tank')
        return message.embed(embed);
    }
};
