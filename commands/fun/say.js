const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'say',
			aliases: [],
			group: 'fun',
			memberName: 'say',
			description: 'Says the Message You Tell it to',
		});
	}

	run(message) {
	}
};
