const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'medium2',
            aliases: [],
            group: 'collecter',
            memberName: '2',
            description: 'Brithish Tier II Medium',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#104e9d')
    .setTitle('Medium II')
    .setURL('https://blitzhangar.com/en/tank/light-vic')
    .setDescription('Added in Update 5.5, the UC 2-pdr is a British Medium with 9 damage per shell with its 4 shell autoloader. It has a 41 pen with a 7.83 sec reload for the magazine, and 0.14 secs in between shells')
    .addBlankField()
    .addField('**History**', 'British medium tank. Developed on the basis of the Vickers Medium Mark I tank from 1924 through 1925 by Vickers. The vehicle was mass-produced from 1925 through 1934 with approximately 100 tanks manufactured.')
    .setThumbnail('https://www.flaginstitute.org/wp/wp-content/uploads/2012/10/UK-Union-Flag.png')
    .setImage('https://wxpcdn.gcdn.co/dcont/tankopedia/uk/GB05_Vickers_Medium_Mk_II.png')
    .setFooter('Sell Price is 750 Gold, Used to be Premium')
        return message.embed(embed);
    }
};
