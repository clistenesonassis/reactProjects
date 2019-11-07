const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send("POSTANGES ACTIVE");
});

router.get('/list', function(req, res) {
    res.json({
        title: 'Deep Learn',
        body: 'O progresso da humanidade na decisão das expeeriências, ... bláblaá... {test cloud}',
        data: '07/11/2019',
        author: 'Clístenes Onassis'
    });
});

module.exports = router;