const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'd1',
            aliases: [],
            group: 'collecter',
            memberName: 'd1',
            description: 'French Tier II Light',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#104e9d')
    .setTitle('D1')
    .setURL('https://blitzhangar.com/en/tank/d1')
    .setDescription('Added in Update 5.5, the D1 is a french Light that does 50 damage with a 52 mm pen at 8.60 seconds')
    .addBlankField()
    .addField('**History**', 'Development was started in 1929. Mass production was launched in 1930, with 160 vehicles manufactured by 1935. A total of 152 tanks fought in France. Eighteen vehicles were captured by the German Army and used for training purposes.')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png')
    .setImage('https://wxpcdn.gcdn.co/dcont/tankopedia/france/F02_D1_preview.png')
    .setFooter('Sell Price is 25 Gold')
        return message.embed(embed);
    }
};
