const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ra1der',
            aliases: ['rdr'],
            group: 'camo',
            memberName: 'ra1der',
            description: 'Shows the Grille 15\'s RA1DER Camo',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
        .setColor('RANDOM')
    .setTitle('Grille 15 RA1DER')
    .setDescription('Fun Fact: RA1D Won the Twister Cup in 2018 Buy Pushing a Grille 15 to the Hill on the Wall of Fort Dispair, Thus Making Them Win Because [-V-]\'s Tanks Could Spot it. Fun Fact 2: RA1D Hates This Camo Because it Defeats the Purpose of That Battle (forgot where I was told this at)')
    .setImage('https://wallpapers.gry-online.pl/pliki/72199/1920x1080.jpg')
    .setFooter('Costs 2 550 Gold')
        return message.embed(embed);
    }
};
