const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class avatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'candycane',
            aliases: ['candy', 'cane'],
            group: 'avatar',
            memberName: 'cane',
            description: '5.6',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('Candy Cane')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/ef/95/ef95e659-7727-4a9f-a8a0-9b9de1e83dd2/candy.png')
    .setFooter('Update 5.6, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
