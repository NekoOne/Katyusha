const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pixelwave',
            aliases: ['px'],
            group: 'camo',
            memberName: 'pixelwave',
            description: 'Shows the WZ-111\'s Pixel Wave Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('WZ-111 Pixel Wave')
    .setImage('http://news.blitzfz.eu/wp-content/uploads/images/wppipes/2018-11/461ae4c512.jpeg')
    .setFooter('Was Free When the Camo Came out, Now it Costs 620 Gold')
        return message.embed(embed);
    }
};
