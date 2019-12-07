const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class avatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'shortfuze',
            aliases: ['fuze', 'short'],
            group: 'avatar',
            memberName: 'shortfuze',
            description: '5.7',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('Short Fuze')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/85/da/85da078c-c118-4f14-9293-de4e8e489ae5/grenade.png')
    .setFooter('Update 5.7, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
