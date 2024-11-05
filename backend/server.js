// server.js 
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const userRoutes = require('./src/routes/userRoutes');

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);

// Basic route
app.get('/', (req, res) => {
    res.send('API is running...');
});

    // Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
