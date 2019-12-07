const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class gupCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'gup',
            aliases: ['girlsundpanzer'],
            group: 'gup',
            memberName: 'gup',
            description: 'What is GuP?',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('purple')
    .setTitle('ガールズ & パンツァー (Girls und Panzer)')
    .setURL('https://gup.fandom.com/wiki/Girls_und_Panzer_Wiki')
    .setThumbnail('https://vignette.wikia.nocookie.net/gup/images/c/cf/6_School_Commanders.jpeg/revision/latest/scale-to-width-down/400?cb=20170122095003')
    .setDescription('Girls und Panzer (Girls and Tanks) is a Japanese Manga that was adapted into a TV show where girls play the feminine sport of *Panzerfahren* or *Sensha-do*')
    .addBlankField(true)
    .addField('GuP first started as a Manga, then was soon adapted to a Japanese Anime. In 2018, it was made into a video game for the Playstation 4 and Nintendo Switch called **__Girls und Panzer: Dream Tank Match__**; It was only released for Japan')
    .setFooter('All the Info is from the Fandom GuP Wiki page, All Rights Reserved')
        return message.embed(embed);
    }
};
