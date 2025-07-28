const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const PORT = 3000;

// MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'finalProjectIT647'
});

connection.connect(err => {
    if (err) {
        console.error('MySQL connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL as ID', connection.threadId);
});

// Middleware
app.use(express.static(path.resolve(__dirname, '..')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// POST route to handle form submission
app.post('/regForm', (req, res) => {
    const { name, email, phone, confirmationNumber } = req.body;

    const query = `
        INSERT INTO finalProjectIT647Table (confirmationNumber, Name, Email, Phone)
        VALUES (?, ?, ?, ?)
    `;

    connection.query(query, [confirmationNumber, name, email, phone], (err, result) => {
        if (err) {
            console.error('Insert error:', err);
            return res.status(500).send('Error saving registration');
        }

        // Redirect to confirmation page
        res.redirect(`/confirmation.html?conf=${confirmationNumber}`);
    });
});

// Existing GET route for confirmation
app.get('/api/confirmation', (req, res) => {
    const confNumber = req.query.conf;

    if (!confNumber) {
        return res.status(400).json({ error: 'Missing confirmation number' });
    }

    const query = `
    SELECT Name AS name, Email AS email, Phone AS phone, confirmationNumber 
    FROM finalProjectIT647Table 
    WHERE confirmationNumber = ?
  `;

    connection.query(query, [confNumber], (err, results) => {
        if (err) {
            console.error('Query error:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Confirmation not found' });
        }

        res.json(results[0]);
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
