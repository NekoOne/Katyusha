const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'santashat',
            aliases: ['hat', 'santa'],
            group: 'avatar',
            memberName: 'hat',
            description: '5.6',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('Santa\'s Hat')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/a6/b5/a6b5d274-b628-49e4-a69f-eff99068df8d/santashat.png')
    .setFooter('Update 5.6, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
