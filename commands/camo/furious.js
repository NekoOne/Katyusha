const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'furious',
            aliases: ['fs'],
            group: 'camo',
            memberName: 'furious',
            description: 'Shows the P.44 Pantera\'s Furious Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('P.44 Pantera Furious')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/af06b9a2a4ee88191e42bb5b3d2f1b81e47a160d.jpg')
    .setFooter('Costs 1 450 Gold')
        return message.embed(embed);
    }
};
