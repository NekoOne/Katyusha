const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'silversnowflake',
            aliases: ['snow'],
            group: 'avatar',
            memberName: 'snow',
            description: '5.6',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('Silver Snowflake')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/88/39/8839b3c0-e065-4038-9ab2-ea30f7719c23/snowflake2.png')
    .setFooter('Update 5.6, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
