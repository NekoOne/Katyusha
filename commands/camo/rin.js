const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'rin',
            aliases: [],
            group: 'camo',
            memberName: 'rin',
            description: 'Shows the STA-1\'s Rin Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
    .setTitle('STA-1 Rin')
    .setImage('https://pbs.twimg.com/media/C_CJIzyXgAElkm2.jpg')
    .setFooter('Costs 1 450 Gold')
        return message.embed(embed);
    }
};
