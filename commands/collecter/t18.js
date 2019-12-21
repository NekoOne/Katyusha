const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 't18',
            aliases: [],
            group: 'collecter',
            memberName: 't18',
            description: 'American Tier II TD',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#104e9d')
    .setTitle('T18')
    .setAuthor('Added in 5.5')
    .setURL('https://blitzhangar.com/en/tank/t18')
    .addField('**__Weight (t)__**',	'13.26', )
    .addField('**__Hit Points__**',	'320', ) 
    .addField('**__Engine Power__**', '(hp)	245', ) 
    .addField('**__Speed Limit__**', '(km/h)	48', )
    .addField('**__Standard Shell Penetration__** (mm)',	'54 - 74', )
    .addField('**__Standard Shell Damage__**',	'30 - 50', )
    .addField('**__Rate of Fire__** (rounds/min)',	'12.0', )
    
    .addBlankField()
    .addField('**History**', 'Development of this self-propelled gun on the basis of the M3 light tank started in October 1941. The first prototype passed trials in the spring of 1942, but the vehicle never saw mass production.')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png')
    .setImage('')
    .setFooter('Sell Price is 25 Gold')
        return message.embed(embed);
    }
};
