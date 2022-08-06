const NotesApi = require('./notesApi');

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks()

describe('API class', () => {
  it('calls fetch and loads data', () => {
    // 1. Instantiate the class
    const notesApi = new NotesApi();

    // 2. We mock the response from `fetch`
    // The mocked result will depend on what your API
    // normally returns — you want your mocked response
    // to "look like" as the real response as closely as
    // possible (it should have the same fields).
    fetch.mockResponseOnce(JSON.stringify({
      name: "Some value",
      id: 123
    }));

    // 3. We call the method, and use `expect`
    // to assert the values we get back contain
    // what we expect.
    notesApi.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.name).toBe("Some value");
      expect(returnedDataFromApi.id).toBe(123);
    });
  });

  // it('calls fetch and creates the data', () => {
  //   // 1.Create the instance
  //   const notesApi = new NotesApi();
  //   // 2. Mock the response
  //   const note = fetch.mockResponseOnce(JSON.stringify({
  //     content: "Some note",
  //   }))
  //   // 3. Call the method and expect
  //   notesApi.createNote(note)
  //   //notesApi.loadNotes((returnedDataFromApi) => {
  //     expect(note.content).toEqual("Some note");
  //   //   expect(returnedDataFromApi.id).toBe(123);
  //  // })
  // })
})