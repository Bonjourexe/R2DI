const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('heure')
		.setDescription("Répond avec l'heure"),
	async execute(interaction) {
		await interaction.reply(["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"][new Date().getDay()]+" "+new Date().toLocaleString("fr-FR"));
	},
};
