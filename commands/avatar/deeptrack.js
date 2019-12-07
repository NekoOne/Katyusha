const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class avatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'deeptrack',
            aliases: ['deep', 'track'],
            group: 'avatar',
            memberName: 'deeptrack',
            description: '5.7',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('Deep Track')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/1e/ce/1ece77cd-3a00-4db4-8e29-27032b39ca3e/track.png')
    .setFooter('Update 5.7, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
