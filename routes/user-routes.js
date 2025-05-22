const express = require('express');

const router = express.Router();

// Example: GET /users
router.get('/', (req, res) => {
    res.send('User route is working!');
});

// Export the router
module.exports = router;