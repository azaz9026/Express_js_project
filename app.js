const express = require('express');
require('dotenv').config();

const app = express();


// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});



module.exports = app;
