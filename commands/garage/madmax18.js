const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'madmax',
            aliases:['18halloween'],
            group: 'garage',
            memberName: 'madmax',
            description: '2018 Halloween Garage for Mad Games',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('BLACK')
	.setTitle('2018 Mad Max Themed Garage')
    .setImage('https://media.giphy.com/media/dYmdRMlm2pAl0FwP4e/giphy.gif')
    .setFooter()
        return message.embed(embed);
    }
};
