'use strict';

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 5000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Database setup
const db = new sqlite3.Database(':memory:'); // Use ':memory:' for in-memory database

// Middleware to parse JSON
app.use(express.json());

// API endpoint for users
app.get('/api/users', (req, res) => {
    // Logic to retrieve users from database
    res.send('Retrieve users');
});

// API endpoint for health records
app.get('/api/health-records', (req, res) => {
    // Logic to retrieve health records from database
    res.send('Retrieve health records');
});

// API endpoint for medications
app.get('/api/medications', (req, res) => {
    // Logic to retrieve medications from database
    res.send('Retrieve medications');
});

// API endpoint for appointments
app.get('/api/appointments', (req, res) => {
    // Logic to retrieve appointments from database
    res.send('Retrieve appointments');
});

// Start server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
