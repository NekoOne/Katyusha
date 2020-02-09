const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'veteran',
            aliases: ['vt'],
            group: 'camo',
            memberName: 'veteran',
            description: 'Shows the Warrior Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
        .setColor('RANDOM')
    .setThumbnail('https://i.imgur.com/HRK67j9.png')
	.setTitle('AMX 50 B Veteran')
    .setImage('https://static-wbp-us.gcdn.co/dcont/1.23.2/fb/image/en-brave.jpg')
    .setFooter('Costs 2 840 Gold')
        return message.embed(embed);
    }
};
