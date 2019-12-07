const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'royalsnowflake',
            aliases: ['royalsnow'],
            group: 'avatar',
            memberName: 'royal',
            description: '5.6',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('Royal Snowflake')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/7f/af/7faf0752-cf1e-4a2a-850f-e8f5e756b24d/snowflake3.png')
    .setFooter('Update 5.6, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
