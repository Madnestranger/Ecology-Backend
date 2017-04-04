var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.get().collection('substances').find().toArray(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
});

router.post('/', function (req, res) {
    var artist = {
        name: req.body.name,
        gdk: req.body.gdk,
        classOfDangerous: req.body.classOfDangerous
    };
    db.get().collection('substances').insert(artist, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(artist);
    });
});

module.exports = router;
