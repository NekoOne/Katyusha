const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'highcaliber',
            aliases: ['hc'],
            group: 'badge',
            memberName: 'highcaliber',
            description: 'High Caliber',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#0000FF')
	.setTitle('High Caliber')
    .setImage('https://dav-static.worldoftanks.eu//ptlwoteu/wot/current/achievement/big/mainGun.png')
    .setFooter('Cause the most damage in a battle--Damage caused must be at least 35% of the total HP of enemy vehicles and no less than 1,000 HP--If two or more players have caused equal damage, the achievement is awarded to the player who earned the most XP in the battle--The achievement is only awarded once per battle.')
        return message.embed(embed);
    }
};
