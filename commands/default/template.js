const { Command } = require('discord.js-commando');


module.exports = class templateCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'template',
            group: 'default',
			memberName: 'template',
			description: 'Wanna help make commands? Here\'s a template!',
			guildOnly: false,
			
		});
	}

	run(message) {
		return message.say('https://raw.githubusercontent.com/NekoOne/katyusha/master/template?token=AKOS77ENBNECAURA7OYN5LK55WJ74');
	}
};