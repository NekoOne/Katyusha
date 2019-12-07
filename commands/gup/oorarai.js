const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class gupCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'oorarai',
            group: 'gup',
            memberName: 'oorarai',
            description: 'Oorarai Girls Academy',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#0000ff')
    .setTitle('県立大洗女子学園 (Oorarai Girls Academy)')

    .setURL('https://gup.fandom.com/wiki/Ooarai_Girls_Academy')

    .setThumbnail('https://vignette.wikia.nocookie.net/gup/images/d/d7/GUP_OoaraiSmall_9335.png/revision/latest?cb=20130222185232')
    .setDescription('Oorarai is a school located in Ōarai, Ibaraki Japan. The school is the smallest one seen out of all of the schools in the series, and it was under risk of closure by the Ministry of Education.')

    .addBlankField()
    .addField('**__Tanks__**', 'Panzerkampfwagen IV, Panzerkampfwagen 38(t) (later it was converted into the Jagdpanzer 38t Hetzer), Sturmgeschutz III Ausf.F, Type 89B I-Go, M3 Lee, Char B1-Bis, Versuchs Kampffahrzeug 45.01 (Porsche), and Type 3 Chi-Nu')
    .addBlankField()
    .setFooter('All the Info is from the Fandom GuP Wiki page, All Rights Reserved')
        return message.embed(embed);
    }
};
