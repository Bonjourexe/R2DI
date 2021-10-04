const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('timestamp')
		.setDescription("Répond avec le timestamp (en ms)"),
	async execute(interaction) {
		await interaction.reply(""+new Date().valueOf());
	},
};
