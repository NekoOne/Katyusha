const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class avatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'criticalmoment',
            group: 'avatar',
            memberName: 'criticalmoment',
            description: 'Realistic Battles',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#0089ca')
	.setTitle('Critical Moment')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/images/avatar75.png')
    .setFooter('Given When You Won 20 Realistic Battles, No Longer Can Be Obtained')
        return message.embed(embed);
    }
};
