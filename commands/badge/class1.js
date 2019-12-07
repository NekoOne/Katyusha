const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'class1',
            aliases: ['cl1'],
            group: 'badge',
            memberName: 'class1',
            description: 'Ace Tanker: Class 1',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#400080')
	.setTitle('Mastery Badge: Class 1')
    .setImage('https://safeboost.net/wp-content/uploads/2018/07/ace-correct-size-1.png')
    .setFooter('Earn more experience than 95% of users who battled in the tank for the previous 7 days')
        return message.embed(embed);
    }
};
