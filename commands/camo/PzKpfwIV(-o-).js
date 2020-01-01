const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: '(-0-)',
            aliases: ['pzivs'],
            group: 'camo',
            memberName: '(-0-)',
            description: 'Shows the T26E4 Pz. IV S\' (-0-) Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('Panzer Kamfpanzerwagen IV Schmalturn (-0-)')
    .setImage('https://i.ytimg.com/vi/-R2obbMH51w/maxresdefault.jpg')
    .setFooter('Came out in Clan Wars: Revenge of the 5th, In Store, 2018 New Years Event')
        return message.embed(embed);
    }
};
