const GetNotesModel = require('./getNotesModel')

describe ('GetNotesModel', () => {
    it ('return empty array', () => {
        const model = new GetNotesModel()
        expect(model.getNotes()).toEqual([]);
    })

    it ('return the notes when it is added', () => {
        const model = new GetNotesModel()
        model.addNote('Buy milk')
        model.addNote('Go to the gym')
        expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym'])
    })

    it ('return an empty array after 2 items are added and the reset function is called', () => {
        const model = new GetNotesModel()
        model.addNote('Buy milk')
        model.addNote('Go to the gym')
        model.reset()
        expect(model.getNotes()).toEqual([]);
    })
})