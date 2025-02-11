require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',  // Replace 'root' with your MySQL username
  password: process.env.DB_PASS || 'yourpassword', // Replace with your MySQL password
  database: process.env.DB_NAME || 'form_db' // Replace with your database name
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to MySQL Database');
    }
});

// API Route to handle form submission
app.post('/submit-form', (req, res) => {
    const { fname, lname, email, phone, message } = req.body;

    const sql = 'INSERT INTO users (fname, lname, email, phone, message) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [fname, lname, email, phone, message], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).json({ message: 'Error submitting form' });
        } else {
            res.status(200).json({ message: 'Form submitted successfully' });
        }
    });
});

// Start Server
const PORT = 5001; // Change this line
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
