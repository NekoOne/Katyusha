const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'legionary',
            aliases: ['ln'],
            group: 'attachment',
            memberName: 'legionary',
            description: 'Shows the Maus\'s Legionary Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('Maus Legionary')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/7d/31/7d31a353-be46-4471-b542-24cf3d9e4a02/legioner_legionary___camouflage_screenshot_maus_4.jpg')
    .setFooter('Costs 2 840 Gold')
        return message.embed(embed);
    }
};
