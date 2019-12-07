const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: '1',
            aliases: ['1'],
            group: 'camo',
            memberName: '1',
            description: 'Shows the E 25\'s #1 Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('E 25 #1')
    .setImage('https://sciencestory.ru/wp-content/uploads/2019/05/e-25_02.jpg')
    .setFooter('Costs 1 070 Gold')
        return message.embed(embed);
    }
};
