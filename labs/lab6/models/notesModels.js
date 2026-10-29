const mongoose = require('mongoose');    // This is where you create a schema in your db

const NoteSchema = new mongoose.Schema({
    noteTitle: {
        type: String,
        required: true
    },
    noteDescription: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ['HIGH', 'LOW', 'MEDIUM'],
        default: 'LOW'   // default if user enters nothing it get's back to default
    },
    dateAdded: {
        type: Date,
        default: Date.now  // .now is a live function where it navigates to Date.now Api
    },
    dateUpdated: {
        type: Date,          //
        default: Date.now
    }
});

module.exports = mongoose.model('Note', NoteSchema);
