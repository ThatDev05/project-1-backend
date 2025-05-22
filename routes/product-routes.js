const express = require('express');

const router = express.Router();

// Example route: GET /products
router.get('/', (req, res) => {
    res.json({ message: 'List of products' });
});

// Example route: POST /products
router.post('/', (req, res) => {
    // Add product logic here
    res.json({ message: 'Product created' });
});

module.exports = router;