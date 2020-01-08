const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'premium',
            aliases:[],
            group: 'garage',
            memberName: 'premium',
            description: 'The New Premium Garage',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('BLACK')
	.setTitle('Premium Garage)
  .setUrl('https://www.artstation.com/artwork/DxBb6G')
    .setImage('https://cdna.artstation.com/p/assets/images/images/023/089/280/large/pavel-sauchyk-ang02.jpg?1578047832')
    .setFooter()
        return message.embed(embed);
    }
};
