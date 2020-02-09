const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'liberty',
            aliases: ['lb'],
            group: 'camo',
            memberName: 'liberty',
            description: 'Shows the AMX CDC\'s Liberty Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
        .setColor('RANDOM')
    .setThumbnail('https://i.imgur.com/ddwIiCi.png')
	.setTitle('AMX CDC Liberty')
    .setImage('https://cdn.wikiwiki.jp/to/w/wotblitz/AMX%20CDC/::ref/AMXCDC_1.jpg?rev=2db9de95581f5edb04bc7b3e2fa5b740')
    .setFooter('Costs 1 590 Gold')
        return message.embed(embed);
    }
};
