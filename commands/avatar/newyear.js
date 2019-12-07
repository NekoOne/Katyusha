const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'newyearsgift',
            aliases: ['year', 'gift'],
            group: 'avatar',
            memberName: 'newyear',
            description: '5.6',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('New Year\'s Gift')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/a8/61/a8615117-28dc-498b-9a91-a5d9fedb8802/present.png')
    .setFooter('Update 5.6, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
