const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'fluffysnowflake',
            aliases: ['fluffy'],
            group: 'avatar',
            memberName: 'snowflake',
            description: '5.6',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('Fluffy Snowflake')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/09/0d/090da1a3-0af7-4d9a-b5c5-ae8ce33ece2a/snowflake1.png')
    .setFooter('Update 5.6, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
