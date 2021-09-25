const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Répond avec Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};