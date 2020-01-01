const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'skilled',
            aliases: [],
            group: 'camo',
            memberName: 'skilled',
            description: 'Shows the IS-4\'s Skilled Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('IS-4 Skilled')
    .setImage('https://cdn.wikiwiki.jp/to/w/wotblitz/uploader/::ref/IS4%20expert%20rightside.jpg?rev=dc5d12252a2d9441fd9b423830b7448f&t=20181219003418')
    .setFooter('Costs 2 840')
        return message.embed(embed);
    }
};
