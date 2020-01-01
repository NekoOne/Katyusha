const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'musketeer',
            aliases: [],
            group: 'camo',
            memberName: 'musketeer',
            description: 'Shows the B-C 25t\'s Musketeer Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
    .setTitle('B-C 25t Musketeer')
    .setImage('https://file.namu.moe/file/2fc29008dc6baffe693565c1dc64bec7313bdaa82b78c5ad18b4a09ad8b0e2d465ee2f21d2dcc519f74e233606a531a6')
    .setFooter('Costs 2 840 Gold')
        return message.embed(embed);
    }
};
