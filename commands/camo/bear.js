const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'bear',
            aliases: ['br'],
            group: 'camo',
            memberName: 'bear',
            description: 'Shows the IS-3\'s Bear Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
        .setColor('RANDOM')
    .setThumbnail('https://i.imgur.com/9NqzNHu.png')
	.setTitle('IS-3 Bear')
    .setImage('https://pbs.twimg.com/media/DR89L7nWAAEpo3Z.jpg')
    .setFooter('1 590')
        return message.embed(embed);
    }
};
