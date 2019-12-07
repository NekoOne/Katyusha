const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hardshell',
            aliases: ['hds'],
            group: 'camo',
            memberName: 'hardshell',
            description: 'Shows the WZ-112-2\'s Hard Shell',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('WZ-112-2 Hard Shell')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/4b6ae50677e0164a0c2aefd6240f3c45d18862ac.jpg')
    .setFooter('Costs 864 Gold')
        return message.embed(embed);
    }
};
