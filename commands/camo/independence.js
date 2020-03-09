const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'independence',
            aliases: ['ip'],
            group: 'camo',
            memberName: 'independence',
            description: 'Shows the T28 HTC\'s Independence Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
        .setColor('RANDOM')
    .setThumbnail('https://i.imgur.com/N3shbkR.png')
	.setTitle('T28 HTC Independence')
    .setImage('http://news.blitzfz.eu/wp-content/uploads/images/wppipes/2018-11/fa8000517a.jpeg')
    .setFooter('Was Awarded in Crates for 4th of July Event in 2016, can Only be Bought Around 4th of July')
        return message.embed(embed);
    }
};
