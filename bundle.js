(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // getNotesModel.js
  var require_getNotesModel = __commonJS({
    "getNotesModel.js"(exports, module) {
      var GetNotesModel2 = class {
        constructor() {
          this.list = [];
        }
        setNotes(notes) {
          this.notes = notes;
        }
        getNotes() {
          return this.list;
        }
        addNote(note) {
          return this.list.push(note);
        }
        reset() {
          return this.list = [];
        }
      };
      module.exports = GetNotesModel2;
    }
  });

  // notesApi.js
  var require_notesApi = __commonJS({
    "notesApi.js"(exports, module) {
      var NotesApi2 = class {
        loadNotes(callback) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
        async createNote(data) {
          fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          }).then((response) => {
            return response.json();
          }).then((data2) => console.log(data2)).catch((error) => {
            console.log("Error");
          });
        }
      };
      module.exports = NotesApi2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var GetNotesModel2 = require_getNotesModel();
      var NotesApi2 = require_notesApi();
      model = new GetNotesModel2();
      api = new NotesApi2();
      var NotesView2 = class {
        constructor(model3, api3) {
          this.model = model3;
          this.api = api3;
          this.mainContainerEl = document.querySelector("#main-container");
          document.querySelector("#add-note-btn").addEventListener("click", () => {
            const newNote = document.querySelector("#add-note-input").value;
            this.addNewNote(newNote);
          });
        }
        addNewNote(newNote) {
          this.model.addNote(newNote);
          this.displayNotes();
        }
        displayNotes() {
          document.querySelectorAll(".note").forEach((element) => {
            element.remove();
          });
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.textContent = note;
            noteEl.className = "note";
            document.querySelector("#add-note-input").value = "";
            this.mainContainerEl.append(noteEl);
          });
        }
        displayNotesFromApi(callback) {
          this.api.loadNotes((data) => {
            data.forEach((note) => {
              this.model.addNote(note);
            });
            this.displayNotes();
            if (callback) {
              callback();
            }
          });
        }
        createNoteServer(note) {
          this.api.createNote((data) => {
            this.model.addNote(note);
            this.displayNotes();
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var GetNotesModel = require_getNotesModel();
  var NotesApi = require_notesApi();
  var NotesView = require_notesView();
  var model2 = new GetNotesModel();
  var api2 = new NotesApi();
  var view = new NotesView(model2, api2);
  view.displayNotesFromApi();
})();
