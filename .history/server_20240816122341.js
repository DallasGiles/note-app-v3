const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// HTML Routes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// API Routes

// GET /api/notes - Read db.json and return all saved notes
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to read notes' });
            return;
        }
        res.json(JSON.parse(data));
    });
});

// POST /api/notes - Save a new note and return it to the client
app.post('/api/notes', (req, res) => {
    const { title, text } = req.body;
    const newNote = {
        id: uuidv4(),
        title,
        text,
    };

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to read notes' });
            return;
        }

        const notes = JSON.parse(data);
        notes.push(newNote);

        fs.writeFile('./db/db.json', JSON.stringify(notes, null, 2), (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Failed to save note' });
                return;
            }

            res.json(newNote);
        });
    });
});

// DELETE /api/notes/:id - Delete a note by id
app.delete('/api/notes/:id', (req, res) => {
    const { id } = req.params;

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to read notes' });
            return;
        }

        let notes = JSON.parse(data);
        notes = notes.filter(note => note.id !== id);

        fs.writeFile('./db/db.json', JSON.stringify(notes, null, 2), (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Failed to delete note' });
                return;
            }

            res.json({ message: 'Note deleted successfully' });
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});