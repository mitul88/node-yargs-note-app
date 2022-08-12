const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require("./notes");


yargs.version("1.1.0");

yargs.command({
    command: "add",
    describe: "Add a note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log(chalk.bgGreen.bold("NOTE TITLE: " + argv.title));
        console.log(chalk.green.bold("NOTE BODY: " + argv.body));
    }
})

yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler: function() {
        console.log(chalk.bgRed.bold("NOTE REMOVED"))
    }
})

yargs.command({
    command: "read",
    describe: "Read note",
    handler: function() {
        console.log(chalk.bgBlue.bold("READ A NOTE"))
    }
})

yargs.command({
    command: "list",
    describe: "List all notes",
    handler: function() {
        console.log(chalk.bgYellow.bold("NOTES LISTED"))
    }
})

yargs.parse();