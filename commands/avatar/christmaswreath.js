const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class avatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'christmaswreath',
            aliases: [],
            group: 'avatar',
            memberName: 'christmaswreath',
            description: 'Rare',
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#DAA520')
	.setTitle('Christmas Wreath')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/1b/d0/1bd0ecad-ffb1-4a03-b582-bc72fe773880/christmas_wreath-avatar.png')
    .setFooter('2019 New Year\'s Adventure, No Longer Can Be Obtained')
        return message.embed(embed);
    }
};
