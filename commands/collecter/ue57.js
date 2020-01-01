const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ue57',
            aliases: ['ue'],
            group: 'collecter',
            memberName: 'ue57',
            description: 'French Tier III TD',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#104e9d')
    .setTitle('Renault UE 57')
    .setAuthor('Added in 5.5')
    .setURL('https://blitzhangar.com/en/tank/uc-2-pdr')
    .addField('**__Weight (t)__**',	'2.79', )
    .addField('**__Hit Points__**',	'400', ) 
    .addField('**__Engine Power (hp)__**', '48', ) 
    .addField('**__Speed Limit (km/h)__**','36', )
    .addField('**__Standard Shell Penetration__** (mm)',	'89 - 121', )
    .addField('**__Standard Shell Damage__**',	'45 - 75', )
    .addField('**__Rate of Fire__** (rounds/min)',	'12', )
    
    .addBlankField()
    .addField('**History**', 'Developed in 1943 in Great Britain by mounting the British 6-pounder gun on the chassis of the French tankette UE2. One prototype was manufactured.')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png')
    .setImage('https://glossary-na-static.gcdn.co/icons/wotb/6.6.0.13/uploaded/vehicles/hd/RenaultUE57.png')
    .setFooter('Sell Price is 50 Gold')
        return message.embed(embed);
    }
};
