const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'tireless',
            aliases: ['tl'],
            group: 'camo',
            memberName: 'tireless',
            description: 'Shows the Tireless Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('T57 Heavy Tireless')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/10/66/106665c3-504d-4da9-ac0a-48dee9731706/update41-camouflage-03.jpg')
    .setFooter('Costs 2 840 Gold')
        return message.embed(embed);
    }
};
