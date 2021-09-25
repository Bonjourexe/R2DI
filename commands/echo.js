const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Répète le message'),
	async execute(interaction) {
		await interaction.reply(interaction.data);
	},
};