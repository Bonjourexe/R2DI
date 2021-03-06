const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('suggestion')
		.setDescription("Pour soumettre ou consulter les suggestions d'améliorations du bot")
		.addStringOption(option =>
			option.setName('suggestion')
				.setDescription('Texte qui sera enregistré et consultable par tous')),
	async execute(interaction) {
		if (interaction.options.data[0]) {
			var post = { id: null, user:interaction.user, suggestion:interaction.options.data[0].value};
			await con.query("INSERT INTO suggestions SET ?", post, function (err, result, fields) {
				if (err) throw err;
				console.log(result);
				interaction.reply(JSON.stringify(result));
		})}
		else {
			await con.query("SELECT * FROM suggestions;", function (err, result, fields) {
				if (err) throw err;
				console.log(result);
				interaction.reply(JSON.stringify(result));
			})
		};
	},
};
