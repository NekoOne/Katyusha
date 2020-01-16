const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const config = require('./config.json');

const client = new CommandoClient({
	commandPrefix: 'k~',
	owner: '228565874187960320',
	invite: 'https://discord.gg/44d5THq',
	unknownCommandResponse: false,
	version: '0.12.1-alpha',
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['fun', 'Fun Non-Blitz Commands'],
		['default'],
		['strats', 'Strats'],
		['maps', 'Maps'],
		['camo', 'Shows Tank\'s Legendary Camo'],
		['warpaint', 'Show\'s a Tank Nation\'s Default Camo'],
		['attachment', 'Shows Tank Attachments and Price'],
		['badge', 'Shows a Mentioned badge'],
		['avatar', 'Shows the Mentioned Avatar'],
		['gup', 'Are These GuP Commands :eyes:'],
		['collecter', 'Hard to Obtain Tanks(Armor will ***NOT*** be displayed until tier 4)'],
		['premium', 'Premium tank\'s Common Sell Price and Stats'],
		['garage', 'Shows the Past Official Garages'],
		['archive', 'All Past Maps, Garages, Tanks, Ect. That Were Removed'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);

	setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]); 
    }, 50000);
});
const activities_list = [
	"k~help",
	"k~ Prefix",
	"with Nonna",
	"Sensha-dō",
	"with My Code",
    ];

client.on('error', console.error);

client.login(config.token);
