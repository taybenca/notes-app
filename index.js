const GetNotesModel = require("./getNotesModel");
const NotesApi = require("./notesApi");
const NotesView = require("./notesView");

//1. Setup the model with one note
const model = new GetNotesModel();

//2. Setup the api
const api = new NotesApi();
// api.createNoteServer('note')

//3. Setup the view
const view = new NotesView(model, api);

//4. Make the view display notes
view.displayNotesFromApi()

