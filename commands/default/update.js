const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')

module.exports = class AvatarCommand extends Command {
    constructor(client) {
        super(client, {
            name:"6.8",
            group: 'fun',
            memberName: '6.8',
            description: 'Update 6.7 Patch Notes',
        })
    }
    run(msg, {user}){
        return message.say('```md
- 2 New Tanks: IX T92E1, X Sheridan
- New Ammo Type: 152 mm MGM 51A1E2 Guided Missle with 340 Penetration
- Grille Concealment Buff 1.45 => 1.86
- 121B DPM Buff 8.34 => 8.69
- Foch 155 AP and HE Damage nerf, and Rate of Fire + Magazine Reload Time Buffed
- Standard B Dispersion Nerfed 0.336 => 0.345
- Progetto 65 Base Aim Time, Dispersion, Engine Power, Effective Power/Weigh Ratio, and Traverse Speed Nerfed; Per Shell Reload Time Buffed
- Tier VI-IX Armor Changes
- New Accumulative Avatars
- Mobile Now Gets Free XP for Watching Videos and Extra Daily Missions
- Now Receive In-Game Messages from Friends Only
- Thumbnail for People Without an Avatar was Changed
```')
    }
        
}
