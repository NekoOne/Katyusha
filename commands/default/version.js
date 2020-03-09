const { Command } = require('discord.js-commando');

module.exports = class versionCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'version',
			aliases: [],
			group: 'util',
			memberName: 'version',
			description: 'Tells Build Version',
			ownerOnly: false,
			hidden: false,
			guildOnly: true,
			
		});
	}

	run(message){
        return message.say('0.13.0-alpha')
    }
};
