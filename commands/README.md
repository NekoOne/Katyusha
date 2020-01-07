### Want to Help Make Commands? This README Will Help!
- Make the File
  - Name the File after the Command
    - Submit a Pull Request!
      - Have a Command with a Rarity? [This](https://github.com/NekoOne/katyusha/tree/master/commands) Will Help!
---

- ### This is the Code and Files Needed for Camos
  - ### Want the List of [Tanks](https://github.com/NekoOne/katyusha/blob/master/commands/colors.md) Needed?

```js
const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: '', //Add the Main Command Name here
            aliases: [''], //Know a better way of saying the camo? insert it here! Remove the `''` if you have none
            group: 'camo', 
            memberName: '', //Add the Camo Name Here
            description: 'Shows the \'s ', //Shows the [TANK NAME]\'s [CAMO NAME]
            
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('RANDOM')
	.setTitle('') //Tank Name Displayed in Battle
    .setImage('') //add Image Here
    .setFooter('Costs  Gold') //Gold Price and/or Update it was Released
        return message.embed(embed);
    }
};
```
---
- ### See a Avatar you want to Add?
  - ### ADD Avatar FILE
  
```js
const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class avatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: '', //Main Command Name
            aliases: [''], //Add an Alt Command that will Help with Long Names!
            group: 'avatar',
            memberName: '', //Add the Avatar Name
            description: '0.0', //Add the Update that it was Added

            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('') //Add a Color from The Color Sheet
	.setTitle('') //This is Where the Avatar Name Goes
    .setImage('') //Add a Good, High Quality Image Here 
    .setFooter('Added in Update 0.0') //Date Added and if you can still obtain it
        return message.embed(embed);
    }
};
```
---
- ## Badges are Pretty Cool, Here is a Template to Add Them!
  - ## Dont Forget About [Rarity!](https://github.com/NekoOne/katyusha/blob/master/commands/colors.md)
```js
const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: '', //Add the Command Name
            aliases: [''], //2nd Command Name to Trigger the Event
            group: '',
            memberName: '', //Add a Short Name
            description: '', //Add the Full Badge Name
            
            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('') //Color of Rarity!
	.setTitle('') //Also Full Badge Name
    .setImage('') //A High Resolution Photo That Isn't Small!
    .setFooter('') //Sum up How to Earn the Badge
        return message.embed(embed);
    }
};
```
---
- ## Tanks are on the List as Well!
  - ## [Premium](https://github.com/NekoOne/Katyusha/blob/master/lists/premium.md) and [Collector](https://github.com/NekoOne/Katyusha/blob/master/lists/collector.md)
```js
const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class tankCommand extends Command {
    constructor(client) {
        super(client, {
            name: '', //Main Command Trigger Word
            aliases: [''], //Add the 2nd Command Trigger here; if you don't know one, remove the `''`
            group: 'collecter',
            memberName: '', //Add a Short, Simple, Name
            description: '', //Add the Nation, Tier in Roman Numerals, and what Type of Tanks it is Here
            
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#104e9d') //The Defualt Color is the Collector's Blue, Use Legendary from the Rarity Page to Use Premium
    .setTitle('') //The Tank Name!
    .setAuthor('') //Add the Update it was Added or Changed to Collector/Premium
    .setURL('') //This Tank from https://blitzhangar.com/en
    .addField('**__Weight (t)__**',	'', ) //All of these Already Tell you
    .addField('**__Hit Points__**',	'', ) 
    .addField('**__Engine Power__**', '(hp)	', ) 
    .addField('**__Speed Limit__**', '(km/h)	', )
    .addField('**__Standard Shell Penetration__** (mm)',	'', )
    .addField('**__Standard Shell Damage__**',	'', )
    .addField('**__Rate of Fire__** (rounds/min)',	'', )
    .addField('**__Armor Thickness__** `Front, Side, Rear`', '')
    .addField('**__Turret Thickness__** `Front, Side, Rear`', '')
    
    .addBlankField()
    .addField('**History**', '') //Tank History From Blitz Garage
    .setThumbnail('') //This is the Tank Nation's Flag
    .setImage('https://wxpcdn.gcdn.co/dcont/tankopedia/uk/GB39_Universal_CarrierQF2.png')
    .setFooter('Sell Price is 750 Gold')
        return message.embed(embed);
    }
};
```
---

> All of This Info I Made Myself, I had No Help Whatsoever in the Coding of These Files. If a Photo that Belongs to you is Used and You Wish to have it not Used; Please Comment on the File, or Message Me on Discord, Either via the Support Server, or Direct Message me with Neko One#2002. I use the Photo's that Google has, Nothing will or has be Modified.
