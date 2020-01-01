const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'calalry',
            aliases: [],
            group: 'camo',
            memberName: 'calalry',
            description: 'Shows the Kpfpz. 70\'s Cavarly Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('Kpfpz. 70 Cavalry')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/76/3e/763eb391-0e96-40bd-a386-f1b785490835/missile-exercise-kpfpz70-02.jpg')
    .setFooter('Costs 2 100 Gold')
        return message.embed(embed);
    }
};
