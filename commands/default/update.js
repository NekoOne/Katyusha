const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')

module.exports = class AvatarCommand extends Command {
    constructor(client) {
        super(client, {
            name:"6.7",
            group: 'fun',
            memberName: '6.7',
            description: 'Update 6.7 Patch Notes',
        })
    }
    run(msg, {user}){
        let embed = new RichEmbed()
        .setTitle('Update 6.7')
        .setURL('https://blitzhangar.com/en/update/6-7-preview')
        .setDescription('2 New Tanks: IX T92E1 and X Sheridan')
        .addBlankField()
        .addField('New Ammo Type: 152 mm MGM 51A1E2 Guided Missle with 340 Penetration')
        .addBlankField()
        .addField('Grille Concealment Buff 1.45 => 1.86')
        .addField('121B DPM Buff 8.34 => 8.69')
        .addField('Foch 155 AP and HE Damage nerf, and Rate of Fire + Magazine Reload Time Buffed')
        .addField('Standard B Dispersion Nerfed 0.336 => 0.345')
        .addField('Progetto 65 Base Aim Time, Dispersion, Engine Power, Effective Power/Weigh Ratio, and Traverse Speed Nerfed')
        .addBlankField()
        .addField('**Armor Update:**')
        .addField(' **III:** M5 Stuart (Mantlet buff), BT-7 (Mantlet Buff)')
        .addField('**VI:** AT 6 (Major Frontal and Cupola Buff')
        .addField('**VII:** IS-2 (Frontal Buff), AT 7 (Cupola Buff), Black Prince (Front Plate Buff) JPanther (Front and Side Buff) ')
        .addField('**VII Cont.** Panther (Front Buff), Tiger (Front Buff), IS-2 (1945) (Cheek Buff), KV-3 (Front and Cheek Buff), IS (Remodled Cupola, Cupola Buff, Transmission Buff, Front and Cheek Buff), T25 AT (Front Mini Buff), T29 (Hull Buff)')
        .addField('**IX:** E 75 (Ball Turret and Gun Mantlet Buff')
        .addField('T-22 Medium (Whole Base Remodeled, Side Skirt Nerfed), Ho-Ri (Added Spaced Armor on Top of Gun')
        .setFooter('All Info is Subject to Change, Click Title for Full Patch Notes')
    }
        
}