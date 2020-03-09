
const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'wasteland',
            aliases:[],
            group: 'archive',
            memberName: 'wasteland',
            description: '2018 Halloween Map for Mad Games',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#c2b280')
	.setTitle('Wasteland for Mad Games 2018')
    .setImage('https://media.giphy.com/media/XfVKFP7XZcOZraoQiq/giphy.gif')
    .setFooter()
        return message.embed(embed);
    }
};
