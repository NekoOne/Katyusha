const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'warrior',
            aliases: ['wr'],
            group: 'camo',
            memberName: 'warrior',
            description: 'Shows the Warrior Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
        .setColor('RANDOM')
    .setThumbnail('https://i.imgur.com/0ZcwTYP.png')
	.setTitle('KV-1 Warrior')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/1d/d1/1dd1b11a-e375-4a89-9c93-15ba44ed1f74/camo-42-dedicated-warrior-en.jpg')
    .setFooter('Costs 490 Gold')
        return message.embed(embed);
    }
};
