const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pz38h',
            aliases: ['38h'],
            group: 'collecter',
            memberName: '38h',
            description: 'German Tier II Light',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#104e9d')
    .setTitle('Panzer Kampfpanzerwagen. 38H 735 (f)')
    .setAuthor('Added in 5.5')
    .setURL('https://blitzhangar.com/en/tank/pz-38h')
    .addField('**__Weight (t)__**',	'10.57', )
    .addField('**__Hit Points__**',	'340', ) 
    .addField('**__Engine Power__**', '(hp)	75', ) 
    .addField('**__Speed Limit__**', '(km/h)	37', )
    .addField('**__Standard Shell Penetration__** (mm)',	'35 - 47', )
    .addField('**__Standard Shell Damage__**',	'30 - 50', )
    .addField('**__Rate of Fire__** (rounds/min)',	'12.0', )
    
    .addBlankField()
    .addField('**History**', 'In May 1940 the French Army had more than 800 vehicles of this type, most of which were captured by the German forces. They were widely used by the Wehrmacht to supplement existing armor.')
    .setThumbnail('https://i.redd.it/ibeugifnq3i11.jpg')
    .setImage('')
    .setFooter('Sell Price is 25 Gold')
        return message.embed(embed);
    }
};
