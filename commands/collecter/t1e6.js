const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 't1e6',
            aliases: ['t1'],
            group: 'collecter',
            memberName: 't1e6',
            description: 'American Tier II Light',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#104e9d')
    .setTitle('T1E6')
    .setAuthor('Added in 5.5')
    .setURL('https://blitzhangar.com/en/tank/t1e6')
    .addField('**__Weight (t)__**',	'9.03', )
    .addField('**__Hit Points__**',	'320', ) 
    .addField('**__Engine Power__**', '(hp)	200', ) 
    .addField('**__Speed Limit__**', '(km/h)	43', )
    .addField('**__Standard Shell Penetration__** (mm)',	'41 - 55', )
    .addField('**__Standard Shell Damage__**',	'30 - 50', )
    .addField('**__Rate of Fire__** (rounds/min)',	'12.6', )
    
    .addBlankField()
    .addField('**History**', 'Experimental vehicles T1E4 through T1E6 were heavily influenced by the British Vickers E. The first prototype was manufactured by the Cunningham corporation in 1931. After trials in 1932, an upgraded variant was built. However, a different experimental tank, the T2, was preferred.')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png')
    .setImage('https://glossary-na-static.gcdn.co/icons/wotb/6.5.0.3/uploaded/vehicles/hd/T1_E6.png')
    .setFooter('Sell Price is 750 Gold')
        return message.embed(embed);
    }
};
