/*
Définition du modèle d'embed
*/
// ref : https://discordjs.guide/popular-topics/embeds.html#embed-preview
// Antoine Le Bras (lbAntoine)

const { MessageEmbed } = require('discord.js');

export class Embedder {
    constructor(color, title, author, description, fields, image, timestamp, footer) {
        this.color = color;
        this.title = title;
        this.author = author;
        this.description = description;
        this.fields = fields;
        this.image = image;
        this.timestamp = timestamp;
        this.footer = footer;

        author = "R2DI";
    }
}

//exemple
// inside a command, event listener, etc.
// const exampleEmbed = new MessageEmbed()
// 	.setColor('#0099ff')
// 	.setTitle('Some title')
// 	.setURL('https://discord.js.org/')
// 	.setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
// 	.setDescription('Some description here')
// 	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
// 	.addFields(
// 		{ name: 'Regular field title', value: 'Some value here' },
// 		{ name: '\u200B', value: '\u200B' },
// 		{ name: 'Inline field title', value: 'Some value here', inline: true },
// 		{ name: 'Inline field title', value: 'Some value here', inline: true },
// 	)
// 	.addField('Inline field title', 'Some value here', true)
// 	.setImage('https://i.imgur.com/AfFp7pu.png')
// 	.setTimestamp()
// 	.setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');

// channel.send({ embeds: [exampleEmbed] });