/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const GetNotesModel = require('./getNotesModel');
const NotesView = require('./notesView')
const NotesApi = require('./notesapi');

require('jest-fetch-mock').enableMocks()

describe('Page view', () => {
  
    it('view all notes', () => {
        // Arrange
        document.body.innerHTML = fs.readFileSync('./index.html');
        const model = new GetNotesModel();
        const view = new NotesView(model);
        // Act
        // model.addNote('A first note')
        view.addNewNote('A first note')
        view.displayNotes();
        // Assert
        expect(document.querySelectorAll('div.note').length).toBe(1)
    })

    it('adds a new note', () => {
        // Arrange
        document.body.innerHTML = fs.readFileSync('./index.html');
        const model = new GetNotesModel();
        const view = new NotesView(model);
    
        // Act - Fill the input
        const input = document.querySelector('#add-note-input');
        input.value = 'My new test note';
        
        // Act - Click the button
        const button = document.querySelector('#add-note-btn')
        button.click();
        
        // Assert - The note should be on the page
        expect(document.querySelectorAll('div.note').length).toBe(1);
        expect(document.querySelectorAll('div.note')[0].textContent).toBe('My new test note');
      });

    it('clear the list of previous notes before displaying', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        const model = new GetNotesModel();
        const view = new NotesView(model);
        model.addNote('one')
        model.addNote('two')

        view.displayNotes();
        view.displayNotes();

        expect(document.querySelectorAll('div.note').length).toEqual(2);
    });

    it('return the notes from API', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        const api = new NotesApi();
        const model = new GetNotesModel();
        const view = new NotesView(model, api);
        
        fetch.mockResponseOnce(JSON.stringify(["Some note"]))

        view.displayNotesFromApi(() => {
            expect(document.querySelectorAll('div.note').length).toEqual(1);
            expect(document.querySelectorAll('div.note').innerText).toEqual("Some note");
        })

    })
});

