const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class garageCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'forest',
            aliases:[],
            group: 'garage',
            memberName: 'forest',
            description: '2019 Forest Garage',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('GREEN')
	.setTitle('2019 Forest Garage')
    .setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26494313/15829602a83b1a6df2b49b40ca146c2e167bc039.jpg')
    .setFooter()
        return message.embed(embed);
    }
};
