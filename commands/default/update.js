const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')

module.exports = class AvatarCommand extends Command {
    constructor(client) {
        super(client, {
            name:"6.5",
            group: 'fun',
            memberName: '6.5',
            description: 'Update 6.5 Patch Notes',
        })
    }
    run(message){
        return message.say('Chinese researchable vehicles buffs:', 'WZ-113 - the average damage of an APCR shell was increased from 400 to 420 HP.', 'WZ-121 - the average damage of an AP and a HEAT shell was increased from 400 to 420 HP and from 340 to 370 HP respectively.','WZ-120 - reload time was reduced from 10.55 to 9.59 s and aiming time was reduced from 3 to 2.5 s (in top configuration).')
    }
}