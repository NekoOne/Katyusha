const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'destroyer',
            aliases: ['dt'],
            group: 'camo',
            memberName: 'destroyer',
            description: 'Shows the Destroyer Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
        .setColor('RANDOM')
    .setThumbnail('https://i.imgur.com/rHCQXVl.png')
	.setTitle('Foch Destroyer')
    .setImage('https://static-wbp-sg.wgcdn.co/dcont/1.28.0/fb/image/foch-destroyer.jpg')
    .setFooter('Costs 2 840 Gold')
        return message.embed(embed);
    }
};
