const { Command } = require('discord.js-commando');


module.exports = class inviteCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'invite',
            aliases: ['inv'],
            group: 'default',
			memberName: 'invite',
			description: 'Sends Bot\'s Invite Link',
			guildOnly: false,
			
		});
	}

	run(message) {
		return message.say('```https://discordapp.com/oauth2/authorize?client_id=636296711937196057&scope=bot&permissions=8```');
	}
};