const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class avatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'luckystreak',
            aliases: ['streak'],
            group: 'avatar',
            memberName: 'luckystreak',
            description: '5.7',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#D3D3D3')
	.setTitle('Lucky Streak')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/31/f1/31f1838e-25f9-44cc-b076-22885569241f/dice.png')
    .setFooter('Update 5.7, Can No Longer Be Ubtained')
        return message.embed(embed);
    }
};
