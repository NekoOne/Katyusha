const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'chaser',
            aliases: [],
            group: 'camo',
            memberName: 'chaser',
            description: 'Shows the Obj. 268\'s Chaser Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('Obj. 268 Chaser')
    .setImage('https://i.ytimg.com/vi/1oBKwxWJn1k/maxresdefault.jpg')
    .setFooter('Costs 2 550')
        return message.embed(embed);
    }
};
