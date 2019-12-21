const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'at1',
            aliases: [],
            group: 'collecter',
            memberName: 'at1',
            description: 'Soviet Tier II TD',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#104e9d')
    .setTitle('AT-1 (Artillery Tank)')
    .setAuthor('Added in 5.5')
    .setURL('https://blitzhangar.com/en/tank/at-1')
    .addField('**__Weight (t)__**',	'9.80', )
    .addField('**__Hit Points__**',	'320', ) 
    .addField('**__Engine Power__**', '(hp)	130', ) 
    .addField('**__Speed Limit__**', '(km/h)	30', )
    .addField('**__Standard Shell Penetration__** (mm)',	'64 - 86', )
    .addField('**__Standard Shell Damage__**',	'45 - 75', )
    .addField('**__Rate of Fire__** (rounds/min)',	'6.7', )
    
    .addBlankField()
    .addField('**History**', 'The AT-1 tank destroyer based on the T-26 light tank was developed by the construction bureau at the Experimental Design Mechanical Department of Factory No. 185 in Leningrad from 1935 through 1936. The vehicle was designed for anti-tank warfare. Two prototypes equipped with the 76.2 mm PS-3 tank guns were built, which underwent trials by 1936. This vehicle never saw mass production.')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_the_Soviet_Union_%281924%E2%80%931955%29.svg/600px-Flag_of_the_Soviet_Union_%281924%E2%80%931955%29.svg.png    ')
    .setImage('')
    .setFooter('Sell Price is 25 Gold')
        return message.embed(embed);
    }
};
