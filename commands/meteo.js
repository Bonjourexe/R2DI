const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { SlashCommandBuilder } = require('@discordjs/builders');
const { weatherT } = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('meteo')
		.setDescription(`Donne la météo du lieu spécifié (par défaut Aix-en-Provence)`)
		.addStringOption(option =>
			option.setName('lieu')
				.setDescription('Lieu (facultatif)')),
	async execute(interaction) {
		await console.log("Météo : " + (interaction.options.data[0] != null ? interaction.options.data[0].value : "pas de paramètre"));
		//await interaction.reply(interaction.options.data[0] != null ? interaction.options.data[0].value : "Aix-en-Provence");
		let location = await (interaction.options.data[0] != null ? interaction.options.data[0].value : "Aix-en-Provence");
		await console.log(location);
		await console.log(`http://api.openweathermap.org/data/2.5/weather?appid=${weatherT}&units=metric&q=${location}`);
		await fetch(`http://api.openweathermap.org/data/2.5/forecast?appid=${weatherT}&units=metric&q=${location}&lang=fr`, { method: "Get"})
			.then(res => res.json())
			.then((json) => {
				console.log(json);
				//interaction.reply(JSON.stringify(json)+"\nMétéo pour "+json.name+", :flag_"+json.sys.country.toLowerCase()+":");
				interaction.reply(JSON.stringify(json.list[8]) + "\n"+json.city.name + ", :flag_"+json.city.country.toLowerCase()+":");
				//let report = JSON.parse(json);
				console.log(json.cod);
		});
	},
};
