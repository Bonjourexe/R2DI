const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Répète le message')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('ce qui sera répété')
				.setRequired(true)),
	async execute(interaction) {
		await console.log("Echo : " + interaction.options);
		await interaction.reply(interaction.options.data[0].value);
	},
};
