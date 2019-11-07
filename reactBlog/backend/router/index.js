const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send('ROUTER ACTIVE');
});

router.use('/postagens', require('./postagens') );

module.exports = router;