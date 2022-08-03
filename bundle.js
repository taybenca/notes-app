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
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          return this.notes.push(note);
        }
        reset() {
          return this.notes = [];
        }
      };
      module.exports = GetNotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var GetNotesModel2 = require_getNotesModel();
      model = new GetNotesModel2();
      var NotesView2 = class {
        constructor(model3) {
          this.model = model3;
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
          console.log(notes);
          notes.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.textContent = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var GetNotesModel = require_getNotesModel();
  var NotesView = require_notesView();
  var model2 = new GetNotesModel();
  model2.addNote("This is an example note");
  var view = new NotesView(model2);
  view.displayNotes();
})();
