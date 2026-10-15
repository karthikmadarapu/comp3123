const express = require('express');
const noteRoutes = express.Router();
const noteModel = require('../models/notesModels');

// 1. Create a new Note
noteRoutes.post('/notes', async (req, res) => {
    // Validate request
    if (!req.body.noteTitle || !req.body.noteDescription) {
        return res.status(400).send({ 
            message: "Note title and description cannot be empty" 
        });
    }

    try {
        const note = new noteModel({
            noteTitle: req.body.noteTitle,
            noteDescription: req.body.noteDescription,
            priority: req.body.priority
        });
        
        const data = await note.save();
        res.status(201).send(data);
    } catch (err) {
        res.status(500).send({ message: err.message || "Error creating the note." });
    }
});

// 2. Retrieve all Notes
noteRoutes.get('/notes', async (req, res) => {
    try {
        const notes = await noteModel.find();
        res.status(200).send(notes);
    } catch (err) {
        res.status(500).send({ message: err.message || "Error retrieving notes." });
    }
});

// 3. Retrieve a single Note with noteId
noteRoutes.get('/notes/:noteId', async (req, res) => {
    try {
        const note = await noteModel.findById(req.params.noteId);
        if (!note) {
            return res.status(404).send({ message: "Note not found with id " + req.params.noteId });
        }
        res.status(200).send(note);
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({ message: "Note not found with id " + req.params.noteId });
        }
        return res.status(500).send({ message: "Error retrieving note with id " + req.params.noteId });
    }
});

// 4. Update a Note with noteId
noteRoutes.put('/notes/:noteId', async (req, res) => {
    if (!req.body.noteTitle || !req.body.noteDescription) {
        return res.status(400).send({ message: "Note title and description cannot be empty" });
    }

    try {
        const updatedNote = await noteModel.findByIdAndUpdate(
            req.params.noteId, 
            {
                noteTitle: req.body.noteTitle,
                noteDescription: req.body.noteDescription,
                priority: req.body.priority,
                dateUpdated: Date.now() // Track when it was changed
            }, 
            { new: true, runValidators: true }
        );

        if (!updatedNote) {
            return res.status(404).send({ message: "Note not found with id " + req.params.noteId });
        }
        res.status(200).send(updatedNote);
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({ message: "Note not found with id " + req.params.noteId });
        }
        return res.status(500).send({ message: "Error updating note with id " + req.params.noteId });
    }
});

// 5. Delete a Note with noteId
noteRoutes.delete('/notes/:noteId', async (req, res) => {
    try {
        const note = await noteModel.findByIdAndDelete(req.params.noteId);
        if (!note) {
            return res.status(404).send({ message: "Note not found with id " + req.params.noteId });
        }
        res.status(200).send({ message: "Note deleted successfully!" });
    } catch (err) {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({ message: "Note not found with id " + req.params.noteId });
        }
        return res.status(500).send({ message: "Could not delete note with id " + req.params.noteId });
    }
});

module.exports = noteRoutes;
