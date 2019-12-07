const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class avatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'frostytangerine',
            aliases: ['frosty', 'tangerine'],
            group: 'avatar',
            memberName: 'frosty',
            description: '5.6',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('Frosty Tangerine')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/1a/0a/1a0a9f20-8e7c-43e1-a66b-9a78d7460c2c/orange.png')
    .setFooter('Update 5.6, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
