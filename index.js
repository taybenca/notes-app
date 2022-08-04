const GetNotesModel = require("./getNotesModel");
const NotesApi = require("./notesApi");
const NotesView = require("./notesView");

//1. Setup the model with one note
const model = new GetNotesModel();
model.addNote('This is an example note');

//2. Setup the api
const api = new NotesApi();

//3. Setup the view
const view = new NotesView(model, api);

//4. Make the view display notes
view.displayNotes()

