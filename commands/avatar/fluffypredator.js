const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class avatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'fluffypredator',
            group: 'avatar',
            memberName: 'fluffy',
            description: '5.6',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('Fluffy Predator')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/78/b1/78b1cb96-dc3e-4199-b903-6543b58fcd15/cat.png')
    .setFooter('Update 5.6, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
