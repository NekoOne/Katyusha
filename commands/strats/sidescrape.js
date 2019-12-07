const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class sidescrapeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'sidescrape',
            aliases: ['ss'],
            group: 'strats',
            memberName: 'sidescrape',
            description: 'Shows Sidescrape Strat',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#ff0000')
	.setTitle('Side-Srape')
	.setDescription('To Hide Behind an Imortal Object and Back up, Only Exposing the Side of your tank.')
	.setThumbnail('http://worldoftanks.com/dcont/fb/image/is-6.jpg')
	.addBlankField()
	.addField('Tier VIII', 'IS-3, IS-3 Defender, IS-6, Obj. 252U, VK 100.01 (P), M6A2E1 EXP, Löwe, 112 Glacial, WZ-111, WZ-111-2, T-34-2, ', true)
	.addBlankField()
	.addField('Tier X', 'add', true)
	.setTimestamp()
	.setImage('https://wiki.gcdn.co/images/6/65/Sidescrape_Position.png')
	.setFooter('All Info are Subject to change, Tournament Tanks Only');

        return message.embed(embed);
    }
};
