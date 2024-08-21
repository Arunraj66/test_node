// server.js

const express = require('express');
const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Route with dynamic parameter
app.get('/user/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
});

// POST route to handle JSON data
app.post('/data', (req, res) => {
    const data = req.body;
    res.json({
        message: 'Data received',
        data: data
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
