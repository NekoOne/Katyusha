const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'mutz',
            aliases: ['mz'],
            group: 'camo',
            memberName: 'mutz',
            description: 'Shows the Panzer 58\'s Mutz Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('Panzer 58 Mutz')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/0493ea88a9d6061483137e6b07bc8d840c9e3feb.jpg')
    .setFooter('Comes With Tank')
        return message.embed(embed);
    }
};
