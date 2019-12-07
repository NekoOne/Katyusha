const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class gupCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'gloriana',
            group: 'gup',
            memberName: 'gloriana',
            description: 'St. Gloriana Girls College',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#ffb7c5')
    .setTitle('聖グロリアーナ女学院 (St. Gloriana Girls College)')

    .setURL('https://gup.fandom.com/wiki/St._Gloriana_Girls_College')

    .setThumbnail('https://vignette.wikia.nocookie.net/gup/images/6/6f/GUP_St_GlorianaSmall_124.png/revision/latest?cb=20170918001854')
    .setDescription('St. Gloriana Girls College is a British themed college located in Yokohama City, Kanagawa Prefecture, Japan. They are known to eat cakes and drink tea, even during the battles. They are a weaker school than their rivals Kuromorimine and Pravda. Due to this, they have not won the championships in a while.')


    .addBlankField()
    .addField('**__Tanks__**', 'Matlida, Churchill Mk. VII, and Crusader')
    .addBlankField()
    .addField('**__Uniform__**', 'St. Gloriana\'s regular uniform is a white collared shirt, black tie, blue skirt, full length black tights and a dark blue pullover with the school emblem emblazoned on the chest.')
    .setFooter('All the Info is from the Fandom GuP Wiki page, All Rights Reserved')
        return message.embed(embed);
    }
};
