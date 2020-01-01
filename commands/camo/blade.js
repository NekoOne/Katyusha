const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'blade',
            aliases: [],
            group: 'camo',
            memberName: 'blade',
            description: 'Shows the VK 90.01 (P)\'s Blade Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('VK 90.01 (P) Blade')
    .setImage('https://cdn.wikiwiki.jp/to/w/wotblitz/VK%2090.01%20%28P%29/::ref/VK90P_Legend3.jpg?rev=7f4e7b3033afda883dd7c481d5df3bd9&t=20191219160828')
    .setFooter('Obtained by Completing the Final Stage in the Holiday Shop')
        return message.embed(embed);
    }
};
