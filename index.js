const GetNotesModel = require("./getNotesModel")
const NotesView = require("./notesView")

const model = new GetNotesModel()
model.addNote('This is an example note')

const view = new NotesView(model)
view.displayNotes()