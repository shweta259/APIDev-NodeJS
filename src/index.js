const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Use Routes
app.use('/users', userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});