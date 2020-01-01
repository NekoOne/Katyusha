const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'menacing',
            aliases: ['mc'],
            group: 'camo',
            memberName: 'menacing',
            description: 'Shows the KV-2\'s Menacing Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
    .setTitle('KV-2 Menacing')
    .setImage('https://cdn.wikiwiki.jp/to/w/wotblitz/uploader/::ref/KV-2%20Menacing_legend.jpg?rev=22d7120a1a3511a87589c7e4e190fa92&t=20180520091821')
    .setFooter('Costs 650 Gold')
        return message.embed(embed);
    }
};
