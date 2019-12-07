const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'uc2pdr',
            aliases: ['uc', 'pdr'],
            group: 'collecter',
            memberName: 'uc',
            description: 'Brithish Tier II TD',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#104e9d')
    .setTitle('UC 2-pdr')
    .setURL('https://blitzhangar.com/en/tank/uc-2-pdr')
    .setDescription('Added in Update 5.5, the UC 2-pdr is a British TD with 60 damage per shot, and a 57 pen with a 7.48 sec reload')
    .addBlankField()
    .addField('**History**', 'The Universal Carrier was developed during the interwar period and was the main armored personnel carrier used by British Commonwealth forces. A total of 90,000 vehicles were produced from 1937 through 1945. Versions of the Universal Carriers were used for transporting personnel and equipment, as machine gun platforms, and for reconnaissance purposes. In 1940, a variant with a 40-mm anti-tank gun was developed.')
    .setThumbnail('https://www.flaginstitute.org/wp/wp-content/uploads/2012/10/UK-Union-Flag.png')
    .setImage('https://wxpcdn.gcdn.co/dcont/tankopedia/uk/GB39_Universal_CarrierQF2.png')
    .setFooter('Sell Price is 25 Gold')
        return message.embed(embed);
    }
};
