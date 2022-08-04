const GetNotesModel = require("./getNotesModel");
const NotesApi = require("./notesApi");
model = new GetNotesModel
api = new NotesApi

class NotesView {
    constructor(model, api) {
        this.model = model
        this.api = api
        this.mainContainerEl = document.querySelector('#main-container')

        document.querySelector('#add-note-btn').addEventListener('click', () => {
            const newNote = document.querySelector('#add-note-input').value;
            this.addNewNote(newNote);
        })
    }

    addNewNote(newNote){
        this.model.addNote(newNote);
        this.displayNotes();
    }

    displayNotes() {
        // Clear all previous notes
        document.querySelectorAll('.note').forEach(element => {
            element.remove();
        })

        const notes = this.model.getNotes()
        // For each note, create and append a new element on the main container
        console.log(notes)
        notes.forEach(note => {
            const noteEl = document.createElement('div');
            noteEl.textContent = note;
            noteEl.className = 'note';
            this.mainContainerEl.append(noteEl);
        })
    }

    displayNotesFromApi() {
        this.api.loadNotes((data) => {
            data.forEach(note => {this.model.addNote(note)})
            this.displayNotes()
        })
    }
}

module.exports = NotesView;