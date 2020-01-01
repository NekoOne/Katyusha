const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pitbull',
            aliases: [],
            group: 'camo',
            memberName: 'pitbull',
            description: 'Shows the M48A1 Patton\'s Pit Bull Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('M48A1 Patton Pit Bull')
    .setImage('https://media.sketchfab.com/models/42b0170d270c463d9fe41ebb8fc58949/thumbnails/09be35edef284e65914d808e9534eac4/4107a710d85d4f27956dccdbc1e0141d.jpeg')
    .setFooter('Costs 3 980 Gold')
        return message.embed(embed);
    }
};
