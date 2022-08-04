const GetNotesModel = require("./getNotesModel");
model = new GetNotesModel

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
}

module.exports = NotesView;

// const message = document.querySelector('#message-input').value
//     const messageElement = document.createElement('div');
//     messageElement.id = 'message';
//     messageElement.innerText = message;

//     document.querySelector('#main-container').value = '';

//     document.querySelector('#main-container').append(messageElement);