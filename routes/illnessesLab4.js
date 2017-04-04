var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET users listing. */
router.get('/', function (req, res, next) {
    db.get().collection('illnessesLab4').find().toArray(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else {
            if (req.query.city) {
                docs = docs.filter(function (item) {
                    return item.mainLocation == req.query.city;
                });
            }
            res.send(docs);
        }
    })
});

router.post('/', function (req, res) {
    var artist = {
        mainLocation: req.body.mainLocation,
        illnessId: req.body.illnessId
    };
    artist.x1 = req.body.x1 ? req.body.x1 : 0;
    artist.x2 = req.body.x2 ? req.body.x2 : 0;
    artist.x3 = req.body.x3 ? req.body.x3 : 0;
    artist.x4 = req.body.x4 ? req.body.x4 : 0;
    artist.x5 = req.body.x5 ? req.body.x5 : 0;
    db.get().collection('illnessesLab4').insert(artist, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else {
            res.send(artist);
        }
    });
});

module.exports = router;
