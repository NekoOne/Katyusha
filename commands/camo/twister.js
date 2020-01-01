const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'twister',
            aliases: [],
            group: 'camo',
            memberName: 'twister',
            description: 'Shows the FMC 50 t\'s Twister Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RED')
	.setTitle('FCM 50 t Twister')
    .setImage('https://pbs.twimg.com/media/EDmiGjVXUAAu8pD.jpg')
    .setFooter('Awarded for Compleating the Twister 2019 Operation Event')
        return message.embed(embed);
    }
};
