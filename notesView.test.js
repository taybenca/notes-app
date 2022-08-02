/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const GetNotesModel = require('./getNotesModel');
const NotesView = require('./notesView')

describe('Page view', () => {
    beforeEach(() => {
        document.body.innerHTML = fs.readFileSync('./index.html');
    })
    it('view all notes', () => {
        // Arrange
        const model = new GetNotesModel();
        const view = new NotesView(model);
        // Act
        model.addNote('A first note')
        view.displayNotes();
        expect(document.querySelectorAll('div.note').length).toBe(1)
    })
});

