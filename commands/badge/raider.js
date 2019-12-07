const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'raider',
            aliases: ['rder'],
            group: 'badge',
            memberName: 'raider',
            description: 'Raider',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#ffd700')
	.setTitle('Raider')
    .setImage('https://dav-static.worldoftanks.eu//ptlwoteu/wot/current/achievement/big/raider.png')
    .setFooter('Remain undetected throughout the entire battle and be the only player to capture the base--The achievement is awarded even if your vehicle was accidentally hit or damaged--Capture points earned in Supremacy mode are not included')
        return message.embed(embed);
    }
};
