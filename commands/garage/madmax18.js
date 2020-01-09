const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'madmax',
            aliases:['18halloween'],
            group: 'garage',
            memberName: 'madmax',
            description: '2018 Halloween Garage for Mad Games',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('BLACK')
	.setTitle('2018 Mad Max Themed Garage')
  .setUrl('https://www.artstation.com/artwork/Jll9Lv')
    .setImage('https://cdna.artstation.com/p/assets/images/images/013/475/570/large/eugene-chistiy-madmax-screenshot-6.jpg?1539768491')
    .setFooter()
        return message.embed(embed);
    }
};
