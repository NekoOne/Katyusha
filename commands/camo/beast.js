const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'beast',
            aliases: [],
            group: 'camo',
            memberName: 'beast',
            description: 'Shows the M48A1 Patton\'s Beast Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('M48A1 Patton Beast')
    .setImage('https://media.sketchfab.com/models/7e4f4f2999144f8a9cd5c08af603b471/thumbnails/6881e11ed4a74ba6a443703c58c39021/1920x1080.jpeg')
    .setFooter('Costs 2 550 Gold')
        return message.embed(embed);
    }
};
