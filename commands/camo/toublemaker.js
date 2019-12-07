const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'troublemaker',
            aliases: ['tm'],
            group: 'camo',
            memberName: 'toublemaker',
            description: 'Shows the Grille 15\'s Troublemaker Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('Grille 15 Trouble Maker')
    .setImage('https://media.wotblitz.com/media/filer_public/33/af/33afcfcc-a51d-45d1-b239-0fb60edf06b7/grill-15-skin_troublemaker.jpg')
    .setFooter('Costs 2 840 Gold')
        return message.embed(embed);
    }
};
