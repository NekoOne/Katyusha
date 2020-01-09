const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class garageCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'halloween2016',
            aliases:['dracula'],
            group: 'garage',
            memberName: 'dracula',
            description: 'Shows the Garage from the Night Hunt Event in 2016',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#65ff00')
	.setTitle('2016 Halloween')
    .setImage('https://media.giphy.com/media/j71bDaMaWAMirltTG5/giphy.gif')
    .setFooter()
        return message.embed(embed);
    }
};
