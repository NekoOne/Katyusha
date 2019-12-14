const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class mapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'jag',
            aliases: [],
            group: 'collecter',
            memberName: 'jag',
            description: 'German Tier II TD',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#104e9d')
    .setTitle('Panzerjäger I (Tank Hunter 1)')
    .setAuthor('Added in 5.5')
    .setURL('https://blitzhangar.com/en/tank/light-vic')
    .addField('**__Weight (t)__**',	'7.04', )
    .addField('**__Hit Points__**',	'320', ) 
    .addField('**__Engine Power__**', '(hp)	100', ) 
    .addField('**__Speed Limit__**', '(km/h)	40', )
    .addField('**__Standard Shell Penetration__** (mm)',	'57 - 77', )
    .addField('**__Standard Shell Damage__**',	'49 - 81', )
    .addField('**__Rate of Fire__** (rounds/min)',	'9.2', )
    
    .addBlankField()
    .addField('**History**', 'Development of the Panzerjäger I, the German tank destroyer, started in 1939 based on the Panzerkampfwagen I Ausf. B. Initially, the 37-mm Pak 36 gun was mounted on the chassis of the Panzerkampfwagen I Ausf. B. However, during the invasion of Poland, it was revealed that the gun was not effective against new vehicles. After Germany captured Czechoslovakia in 1940, the 47-mm Pak 36(t) L/43.4 (Škoda 47-mm A-5 KP ÚV vz. 38 Model A5) gun was mounted on the tank destroyer. A total of 202 vehicles were manufactured and saw action until 1943.')
    .setThumbnail('https://i.redd.it/ibeugifnq3i11.jpg')
    .setImage('https://glossary-na-static.gcdn.co/icons/wotb/6.5.0.3/uploaded/vehicles/hd/PanzerJager_I.png')
    .setFooter('Sell Price is 25 Gold')
        return message.embed(embed);
    }
};
