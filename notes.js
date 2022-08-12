const { default: chalk } = require('chalk');
const fs = require('fs');


const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find( note=> note.title === title )

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.bgGreen.bold("New Note added"))
    }
    else {
        console.log(chalk.bgRed.bold("Note Title is not available !!!"))
    }
}

const removeNote = (title)=> {
    const notes = loadNotes();

    const filteredNotes = notes.filter( note=> note.title !== title )
    saveNotes(filteredNotes);

    notes.length > filteredNotes.length ? console.log(chalk.bgRed.bold(title + " removed")) : console.log(chalk.bgCyan.bold(title + " Not found !!"))

}

const listNotes = () => {
    const notes = loadNotes()
    notes.map((note, index)=> {
        console.log(chalk.blue.bold(index + 1 + ": " + note.title))
    })
}
const readNotes = (title) => {
    const notes = loadNotes();
    const findNote = notes.find(note=> note.title === title )
    
    if(findNote) {
        console.log(findNote.body)
        console.log(chalk.bgWhite.bold(findNote.title.toUpperCase()))
    } else {
        console.log(chalk.red.bold("Note is not available"))
    }
        
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
};