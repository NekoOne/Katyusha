const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class avatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'christmasdecoration',
            aliases: ['christmas'],
            group: 'avatar',
            memberName: 'christmas',
            description: '5.6',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('Christmas Decoration')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/5f/f5/5ff59edf-1bf1-40d5-bbca-a1b3e2b678a7/chrstmasball1.png')
    .setFooter('Update 5.6, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
