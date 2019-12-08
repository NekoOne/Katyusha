const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class cornerCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'corner',
            aliases: ['cn'],
            group: 'strats',
            memberName: 'corner',
            description: 'Shows Corner Peak Strat',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#ff0000')
	.setTitle('Peak')
	.setDescription('To Hide the Hull of Your Tank Only Exposing The Turret')
	.setThumbnail('http://wotblitz.asia/dcont/1.2.0.1/fb/image/tmb/t34_320x.jpg')
	.setImage('http://i.imgur.com/0wrNdi0.png')
	.setFooter('All Info are Subject to change, Tournament Tanks Only');

        return message.embed(embed);
    }
};
