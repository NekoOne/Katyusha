const { Command } = require('discord.js-commando');


module.exports = class newCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'new',
            aliases: [''],
            group: 'default',
			memberName: 'new',
			description: 'Sends What\'s New About the Bot',
			guildOnly: false,
			
		});
	}

	run(message) {
		return message.say('Added 7 Badges and 54 Avatars; That is 61 Files in 2 Hours! Ping `Neko One#6011` if Info is Wrong');
	}
};