// Require the necessary discord.js classes
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token, DBinfo } = require('./config.json');
var mysql = require('mysql');
var con = mysql.createConnection({
	host: DBinfo.host,
	user: DBinfo.user,
	password: DBinfo.password,
	database: DBinfo.database
});
con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	con.query("SELECT * FROM Test;", function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	})
});


const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}
// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error.stack);
		await interaction.reply({ content: "Une erreur s'est produite", ephemeral: true });
	}
});

client.login(token);
