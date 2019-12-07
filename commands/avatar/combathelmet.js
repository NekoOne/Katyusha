const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class avatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'combathelmet',
            aliases: ['combat', 'helmet'],
            group: 'avatar',
            memberName: 'combathelmet',
            description: '5.7',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('Combat Helmet')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/4a/6a/4a6aeb26-2782-4cc1-b2e6-cfa69b0b4ad0/helmet.png')
    .setFooter('Update 5.7, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
