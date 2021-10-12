const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription("Donne des infos sur le bot"),
	async execute(interaction) {
		await interaction.reply("http://github.com/Bonjourexe/R2DI");
	},
};
