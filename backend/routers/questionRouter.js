const express = require('express');
const router = express.Router();

const guideModel = require('../models/questionModel')

router.post('/add', (req, res) => {
    console.log(req.body);

    new guideModel(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});

module.exports = router;
