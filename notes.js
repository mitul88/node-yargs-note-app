const { default: chalk } = require('chalk');
const fs = require('fs');

const getNotes = () => {
    return "Your notes ... "
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.filter((note)=> {
        return note.title === title 
    })

    if(duplicateNote.length === 0) {
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

    const filteredNotes = notes.filter((note)=> {
        return note.title !== title 
    })
    saveNotes(filteredNotes);

    notes.length > filteredNotes.length ? console.log(chalk.bgRed.bold(title + " removed")) : console.log(chalk.bgCyan.bold(title + " Not found !!"))

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
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
};