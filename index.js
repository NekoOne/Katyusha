const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const config = require('./config.json');

const client = new CommandoClient({
	commandPrefix: 'k~',
	owner: '228565874187960320',
	invite: 'https://discord.gg/44d5THq',
	unknownCommandResponse: false,
	version: '0.11.1-alpha',
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['fun', 'Fun Non-Blitz Commands'],
		['default'],
		['strats', 'Strats'],
		['maps', 'Maps'],
		['camo', 'Shows Tank\'s Legendary Camo'],
		['attachment', 'Shows Tank Attachments and Price'],
		['badge', 'Shows a Mentioned badge'],
		['avatar', 'Shows the Mentioned Avatar'],
		['gup', 'Are These GuP Commands :eyes:'],
		['collecter', 'Hard to Obtain Tanks(Armor will ***NOT*** be displayed until tier 4)'],
		['premium', 'Premium tank\'s Common Sell Price and Stats']
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);

	setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 50000);
});
const activities_list = [
	"k~help",
	"k~ Prefix",
	"with Nonna",
	"Sensha-dō",
	"with My Code",
	"in ${client.guilds.size} Guilds",
    ];

client.on('error', console.error);

client.login(config.token);
