const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'kamikaze',
            aliases: ['kmz'],
            group: 'badge',
            memberName: 'kamikaze',
            description: 'Kamikaze',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#808080')
	.setTitle('Kamikaze')
    .setImage('https://dav-static.worldoftanks.eu//ptlwoteu/wot/current/achievement/kamikaze.png')
    .setFooter('Destroy an enemy vehicle by ramming--Destroy a higher tier enemy vehicle--The achievement is only awarded once per battle.')
        return message.embed(embed);
    }
};
