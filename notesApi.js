class NotesApi {
    loadNotes(){
        fetch('GET/notes')
        .then(response => response.json())
    }
}

module.exports = NotesApi