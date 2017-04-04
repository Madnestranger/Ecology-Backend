var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.get().collection('substancesLab3').find().toArray(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
});

router.post('/', function (req, res) {
    var artist = {
        name: req.body.name
    };
    db.get().collection('substancesLab3').insert(artist, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(artist);
    });
});

module.exports = router;
