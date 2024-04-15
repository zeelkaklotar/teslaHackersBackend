const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS middleware

const app = express();

// Middleware
app.use(bodyParser.json());

// Enable CORS for all origins
app.use(cors());

// MongoDB Connection
const mongoURI = 'mongodb+srv://zeelkaklotar:Zeel@cluster0.uu9hokj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/contacts', require('./route/contactRoute'));

module.exports = app;
