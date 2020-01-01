const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'gamescom',
            aliases: ['gs'],
            group: 'camo',
            memberName: 'gamescom',
            description: 'Shows the Tiger 1\'s Gamescom Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RED')
	.setTitle('Tiger 1 Gamescon')
    .setImage('http://rykoszet.info/wp-content/uploads/2016/08/tiger-gamescom-1.jpg')
    .setFooter('Rewarded to Participants of the 2016 Gamescom')
        return message.embed(embed);
    }
};
