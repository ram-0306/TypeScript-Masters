const express = require('express');
const router = express.Router();

const feedbackModel = require('../models/guideModel')

router.post('/add', (req, res) => {
    console.log(req.body);

    new feedbackModel(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});
