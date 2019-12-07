const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'phoenix',
            aliases: ['pnx'],
            group: 'camo',
            memberName: 'phoenix',
            description: 'Shows the O-47\'s Phoenix Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('O-47 Phoenix')
    .setImage('https://amaunet85.files.wordpress.com/2017/12/world-of-tanks-blitz-o-47-screenshots-5.jpg?w=960')
    .setFooter('Costs 1 450 Gold')
        return message.embed(embed);
    }
};
