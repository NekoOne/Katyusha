const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'vic',
            aliases: [],
            group: 'collecter',
            memberName: 'vic',
            description: 'Brithish Tier II Light',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#104e9d')
    .setTitle('UC 2-pdr')
    .setAuthor('Added in 5.5')
    .setURL('https://blitzhangar.com/en/tank/uc-2-pdr')
    .addField('**__Weight (t)__**',	'5.20', )
    .addField('**__Hit Points__**',	'320', ) 
    .addField('**__Engine Power__**', '(hp)	95', ) 
    .addField('**__Speed Limit__**', '(km/h)	48', )
    .addField('**__Standard Shell Penetration__** (mm)',	'35 - 47', )
    .addField('**__Standard Shell Damage__**',	'7 - 11', )
    .addField('**__Rate of Fire__** (rounds/min)',	'56.1', )
    
    .addBlankField()
    .addField('**History**', 'A modification of the Mk.VI light tank with enhanced armament (the 15-mm Besa machinegun). Produced from December 1939 through July 1940. Initially, the tanks were designed for service in colonies. A total of 130 Mk. VIС tanks were manufactured.')
    .setThumbnail('https://www.flaginstitute.org/wp/wp-content/uploads/2012/10/UK-Union-Flag.png')
    .setImage('https://wxpcdn.gcdn.co/dcont/tankopedia/uk/GB39_Universal_CarrierQF2.png')
    .setFooter('Sell Price is 750 Gold')
        return message.embed(embed);
    }
};
