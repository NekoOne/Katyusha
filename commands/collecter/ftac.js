const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ftac',
            aliases: ['ft', 'ac'],
            group: 'collecter',
            memberName: 'ftac',
            description: 'French Tier II TD',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#104e9d')
    .setTitle('FT AC')
    .setURL('https://blitzhangar.com/en/tank/ft-ac')
    .setDescription('Added in Update 5.5, The FT AC is French tier 2 tank destroyer with no armor and a weak gun', 'AP Damage/Pen: 45/66')
    .addBlankField()
    .addField('**History**', 'As the French Army\'s vast fleet of Renault FT tanks passed into obsolence, some efforts were made to upgrade the vehicles. One proposal was to convert them into tank destroyers, but the plan was never implemented.')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png')
    .setImage('http://glossary-na-static.gcdn.co/icons/wotb/current/uploaded/vehicles/hd/RenaultFT_AC.png')
    .setFooter('Sell Price is 25 Gold')
        return message.embed(embed);
    }
};
