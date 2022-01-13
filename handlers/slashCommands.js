const { readdirSync } = require("fs"),
ascii = require("ascii-table");

let table = new ascii("Commands");
table.setHeading("Slash Commands", "Load status");

module.exports = (client) => {
        readdirSync("./slashCommands").forEach(dir => {
            const commands = readdirSync(`./slashCommands/${dir}/`).filter(file => file.endsWith(".js"));
    
            for (let file of commands) {
                let pull = require(`../slashCommands/${dir}/${file}`);

                client.slash_commands.set(pull.data.name, pull);
                table.addRow(file, '✅');
            
                if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
            }
        });
        // Log the table
        console.log(table.toString());
}