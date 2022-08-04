class GetNotesModel {
    constructor(){
        this.list = []
    }

    setNotes(notes){
        this.notes = notes
    }
    
    getNotes() {
        return this.list
    }

    addNote(note) {
        return this.list.push(note)
    }

    reset() {
        return this.list = []
    }
}

module.exports = GetNotesModel