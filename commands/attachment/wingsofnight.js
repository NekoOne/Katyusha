const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'wingsofnight',
            aliases: ['won'],
            group: 'attachment',
            memberName: 'wingsofnight',
            description: 'Shows Wings of Night Attachment',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('A leKpz M 41 90 mm With the Wings of Night')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/c2cba3ef8974daa3f0c3057497698ea25d5401d6.gif')
    .setFooter('Availible on Certain Tanks Tiers 5-10 for 400-4 000 Gold, First Animated Attachment')
        return message.embed(embed);
    }
};
