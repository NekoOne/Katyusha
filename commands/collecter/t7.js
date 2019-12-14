const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 't7combatcar',
            aliases: ['t7'],
            group: 'collecter',
            memberName: 't7cc',
            description: 'American Tier II Light',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#104e9d')
    .setTitle('T7 Combat Car')
    .setAuthor('Added in 5.5')
    .setURL('https://blitzhangar.com/en/tank/t7-car')
    .addField('**__Weight (t)__**',	'9.96', )
    .addField('**__Hit Points__**',	'320', ) 
    .addField('**__Engine Power__**', '(hp)	220', ) 
    .addField('**__Speed Limit__**', '(km/h)	47', )
    .addField('**__Standard Shell Penetration__** (mm)',	'35 - 47', )
    .addField('**__Standard Shell Damage__**',	'6 - 10', )
    .addField('**__Rate of Fire__** (rounds/min)',	'60.4', )
    
    .addBlankField()
    .addField('**History**', 'Light wheeled caterpillar vehicle with machineguns, developed for the U.S. cavalry. The trials of the first prototype started in April 1937 and continued until 1939. However, the T7 was discontinued in favor of track-type vehicles.')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png')
    .setImage('https://glossary-na-static.gcdn.co/icons/wotb/6.5.0.3/uploaded/vehicles/hd/T7_Combat_Car.png')
    .setFooter('Sell Price is 650 Gold')
        return message.embed(embed);
    }
};
