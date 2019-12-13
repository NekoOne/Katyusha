const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class hulldownCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hulldown',
            aliases: ['hd'],
            group: 'strats',
            memberName: 'hulldowm',
            description: 'Shows Hulldown Strat',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('Hull-Down')
	.setDescription('To Hide the Hull of Your Tank Only Exposing The Turret')
	.setThumbnail('http://wotblitz.asia/dcont/1.2.0.1/fb/image/tmb/t34_320x.jpg')
	.addField('Maps', 'Mines, Black Goldville, Dead Rail, Falls Creek, Rockfield, Himmelsdorf, Castilla, Canal, Vinyards, Canyon, Naval Frontier, Faust, Normandy, New bay')
	.addBlankField()
	.addField('Tier VIII', 'T34, VK 100.01 (P), Löwe, T28 Defender, T26E4 SuperPershing', true)
	.addBlankField()
	.addField('Tier X', 'add', true)
	.setTimestamp()
	.setImage('https://static-ptl-eu.gcdn.co/dcont/fb/image/hull_down_2.png')
	.setFooter('All Info are Subject to change, Tournament Tanks Only');

        return message.embed(embed);
    }
};
