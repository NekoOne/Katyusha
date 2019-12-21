const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 't2light',
            aliases: [],
            group: 'collecter',
            memberName: 't2light',
            description: 'American Tier II Light',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#104e9d')
    .setTitle('T2 Light')
    .setAuthor('Added in 5.5')
    .setURL('https://blitzhangar.com/en/tank/t2light')
    .addField('**__Weight (t)__**',	'7.60', )
    .addField('**__Hit Points__**',	'320', ) 
    .addField('**__Engine Power__**', '(hp)	170', ) 
    .addField('**__Speed Limit__**', '(km/h)	65', )
    .addField('**__Standard Shell Penetration__** (mm)',	'37 - 51', )
    .addField('**__Standard Shell Damage__**',	'9 - 15', )
    .addField('**__Rate of Fire__** (rounds/min)',	'40.9', )
    
    .addBlankField()
    .addField('**History**', 'The vehicle prototype was designed and built by Rock Island Arsenal in 1933. The chassis and suspension elements of the Vickers Mk. E (Vickers "6-tonner") tank were used. Trials of the T2 prototype were successful, but the T2E1 variant was preferred due to its higher terrain crossing capacity.')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png')
    .setImage('')
    .setFooter('Sell Price is 650 Gold')
        return message.embed(embed);
    }
};
