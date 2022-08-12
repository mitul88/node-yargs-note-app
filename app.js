const chalk = require('chalk');
const yargs = require('yargs');
const notes = require("./notes");


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
    handler: (argv) => {
        notes.addNote(argv.title.toLowerCase(), argv.body);
    }
})

yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        }       
    },
    handler: (argv) => {
        notes.removeNote(argv.title.toLowerCase());
    }
})

yargs.command({
    command: "read",
    describe: "Read note",
    handler: () => {
        console.log(chalk.bgBlue.bold("READ A NOTE"))
    }
})

yargs.command({
    command: "list",
    describe: "List all notes",
    handler: () => {
        console.log(chalk.bgYellow.bold("NOTES LISTED"))
    }
})

yargs.parse();