const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'invader',
            aliases: ['iner'],
            group: 'badge',
            memberName: 'invader',
            description: 'Invader',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#0000FF')
	.setTitle('Invader')
    .setImage('https://dav-static.worldoftanks.eu//ptlwoteu/wot/current/achievement/big/invader.png')
    .setFooter('Earn more base capture points than any other player--Earn at least 80 capture points--The achievement is awarded upon successful base capture--Only the points that were part of the base capture are included--Capture points earned in Supremacy mode are not taken into account')
        return message.embed(embed);
    }
};
