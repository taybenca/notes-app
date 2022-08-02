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

  // index.js
  var GetNotesModel = require_getNotesModel();
  var model = new GetNotesModel();
  console.log(model.getNotes());
})();
