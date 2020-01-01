const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'titi',
            aliases: [],
            group: 'camo',
            memberName: 'titi',
            description: 'Shows the FMC 50 t\'s titi Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RED')
	.setTitle('FCM 50 t titi')
    .setImage('https://www.mmowg.net/wp-content/uploads/2016/06/fcm_gallery_07.jpg')
    .setFooter('Could be bought during the 2016 World Cup in a Crate')
        return message.embed(embed);
    }
};
