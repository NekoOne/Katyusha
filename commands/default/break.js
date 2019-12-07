const { Command } = require('discord.js-commando');


module.exports = class newCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'break',
            group: 'default',
			memberName: 'break',
			description: 'Bruh',
            guildOnly: false,
            ownerOnly: true,
			
		});
	}
}