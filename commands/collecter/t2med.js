const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 't2medium',
            aliases: ['t2'],
            group: 'collecter',
            memberName: 't2med',
            description: 'American Tier II Medium',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#104e9d')
    .setTitle('T2 Medium Tank')
    .setAuthor('Added in 5.5')
    .setURL('https://blitzhangar.com/en/tank/t2-medium')
    .addField('**__Weight (t)__**',	'12.12', )
    .addField('**__Hit Points__**',	'340', ) 
    .addField('**__Engine Power__**', '(hp)	270', ) 
    .addField('**__Speed Limit__**', '(km/h)	40', )
    .addField('**__Standard Shell Penetration__** (mm)',	'41 - 55', )
    .addField('**__Standard Shell Damage__**',	'30 - 50', )
    .addField('**__Rate of Fire__** (rounds/min)',	'12.0', )
    
    .addBlankField()
    .addField('**History**', 'Experimental medium tank. Developed from 1930 to 1932. However, this model never saw mass production.')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png')
    .setImage('https://glossary-na-static.gcdn.co/icons/wotb/6.5.0.3/uploaded/vehicles/hd/T2_med.png')
    .setFooter('Sell Price is 25 Gold')
        return message.embed(embed);
    }
};
