const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'tetrarch',
            aliases: ['tet'],
            group: 'collecter',
            memberName: 'tetrarch',
            description: 'Soviet Tier II Light',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#104e9d')
    .setTitle('Tetrarch')
    .setAuthor('Added in 5.5')
    .setURL('https://blitzhangar.com/en/tank/tetrarch')
    .addField('**__Weight (t)__**',	'7.25', )
    .addField('**__Hit Points__**',	'330', ) 
    .addField('**__Engine Power__**', '(hp)	160', ) 
    .addField('**__Speed Limit__**', '(km/h)	60', )
    .addField('**__Standard Shell Penetration__** (mm)',	'54 - 74', )
    .addField('**__Standard Shell Damage__**',	'30 - 50', )
    .addField('**__Rate of Fire__** (rounds/min)',	'11.5', )
    
    .addBlankField()
    .addField('**History**', 'Developed in 1936 by the Vickers-Armstrong company, with a total of 177 vehicles in two basic modifications the Tetrarch Mk I and the Tetrarch Mk ICS manufactured from 1941 through 1942. In 1942 twenty vehicles were delivered to the U.S.S.R. under Lend-Lease, of which 19 fought on the Eastern Front until October 1943.')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_the_Soviet_Union_%281924%E2%80%931955%29.svg/600px-Flag_of_the_Soviet_Union_%281924%E2%80%931955%29.svg.png    ')
    .setImage('https://glossary-na-static.gcdn.co/icons/wotb/6.5.0.3/uploaded/vehicles/hd/Tetrarch_LL.png')
    .setFooter('Sell Price is 700 Gold')
        return message.embed(embed);
    }
};
