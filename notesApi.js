class NotesApi {
    loadNotes(callback){
        fetch('http://localhost:3000/notes')
        .then(response => response.json())
        .then(data => {
            callback(data)
        })
    }

    async createNote(data){
        
        fetch('http://localhost:3000/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response => response.json())
        .then(list => {
            return list;
        })
        .catch((error) => {
            console.error("Error:", error);
        })
    
        )
    }
}

module.exports = NotesApi

// app.post('/notes', (req, res) => {
//     notes.push(req.body.content)
//     res.send(JSON.stringify(notes));
//   });
  