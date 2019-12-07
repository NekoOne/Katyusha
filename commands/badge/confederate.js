const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'confederate',
            aliases: ['con'],
            group: 'badge',
            memberName: 'confederate',
            description: 'Confederate',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#0000FF')
	.setTitle('Confederate')
    .setImage('https://dav-static.worldoftanks.eu//ptlwoteu/wot/current/achievement/big/supporter.png')
    .setFooter('Damage more enemy vehicles than any other player or destroy their tracks--The number of affected enemy vehicles must be at least 4--Vehicles destroyed by other players or lost in battle are included--Ricochets and non-penetrations are not included--If two or more players score an equal number of hits, the achievement is awarded to the player who earned the most XP in the battle--The achievement is only awarded once per battle.')
        return message.embed(embed);
    }
};
