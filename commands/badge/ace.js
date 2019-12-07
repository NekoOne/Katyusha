const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'acetanker',
            aliases: ['ace'],
            group: 'badge',
            memberName: 'ace',
            description: 'Ace Tanker',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#ffd700')
	.setTitle('Mastery Badge: Ace Tanker')
    .setImage('https://safeboost.net/wp-content/uploads/2018/07/ace-correct-size-1.png')
    .setFooter('Earn more experience than 99% of users who battled in the tank for the previous 7 days')
        return message.embed(embed);
    }
};
