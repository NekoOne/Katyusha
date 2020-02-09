const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'terror',
            aliases: ['t'],
            group: 'camo',
            memberName: 'terror',
            description: 'Shows the Terror Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
        .setColor('RANDOM')
    .setThumbnail('https://i.imgur.com/T2X1UQc.png')
	.setTitle('Obj. 140 Terror')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/7e/61/7e6143ea-8596-4cdd-ae8b-0e5a35018ca1/update41-camouflage-01.jpg')
    .setFooter('Costs 2 840 Gold')
        return message.embed(embed);
    }
};
