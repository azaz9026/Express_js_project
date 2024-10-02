
require('dotenv').config();
const express = require('express');
const cors = require("cors")


const connectToDb = require('./config/db.js')

const app = express();

// Using Express middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// init connection to db
connectToDb()


const usre_routes = require('./routes/user_routes.js')

app.use('/' , usre_routes);


module.exports = app;