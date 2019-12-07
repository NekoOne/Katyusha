const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'bauble',
            group: 'avatar',
            memberName: 'bauble',
            description: '5.6',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('Bauble')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/30/93/3093942e-6b3a-4781-a451-e9340e6cbc4a/chrstmasball2.png')
    .setFooter('Update 5.6, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
