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
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        } 
    },
    handler: (argv) => {
        notes.readNotes(argv.title)
    }
})

yargs.command({
    command: "list",
    describe: "List all notes",
    handler: () => {
        console.log(chalk.bgGreen.bold("ALL NOTES LISTED BELOW :"))
        notes.listNotes()
    }
})

yargs.parse();