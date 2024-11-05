// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();

// Example route
router.get('/users', (req, res) => {
    res.json({ message: 'List of users' });
});

module.exports = router;
