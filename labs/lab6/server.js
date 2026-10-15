const express = require('express');
const mongoose = require('mongoose');
const noteRoute = require('./routes/noteRoutes');

// TODO - Update your mongoDB Atals Url here to Connect to the database
const DB_URL = process.env.DB_URL || "mongodb+srv://karthikmadarapu21_db_user:vcLYz9vF4U4PBtgi@cluster-lab06.05e0mxo.mongodb.net";
const PORT = process.env.PORT || 8081;

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});

app.use('/', noteRoute);

// Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
    app.listen(PORT, () => {
    console.log("Server is listening on port 8081");
});
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
