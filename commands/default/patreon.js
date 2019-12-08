const { Command } = require('discord.js-commando');


module.exports = class patreonCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'patreon',
            aliases: ['support'],
            group: 'default',
			memberName: 'patreon',
			description: 'Want to Help Keep the Bot up and Running?',
            guildOnly: false,
            ownerOnly: true
			
		});
	}

	run(message) {
		return message.say('https://www.patreon.com/user?u=16422816');
	}
};