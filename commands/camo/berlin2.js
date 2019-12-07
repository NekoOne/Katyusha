const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'berlin2',
            aliases: ['bl2'],
            group: 'camo',
            memberName: 'berlin2',
            description: 'Shows the IS-2\'s Berlin Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('IS-2 Berlin')
    .setImage('https://static-wgpc.wgmobile.net/original_images/Blitz_small_jL4j03H.png')
    .setFooter('Costs 1,070 Gold')
        return message.embed(embed);
    }
};
