const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'blade',
            aliases: [],
            group: 'camo',
            memberName: 'blade',
            description: 'Shows the VK 90.01 (P)\'s Blade Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
        .setColor('RANDOM')
    .setThumbnail('https://i.imgur.com/InJFvBz.png')
	.setTitle('VK 90.01 (P) Blade')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/images/vk-90-01_event-browser-001.jpg')
    .setFooter('Obtained by Completing the Final Stage in the Holiday Shop')
        return message.embed(embed);
    }
};
