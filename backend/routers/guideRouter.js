const express = require('express');
const router = express.Router();

const guideModel = require('../models/guideModel')

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

router.get('/getall', (req, res) => {

    guideModel.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});

// url paramters
router.get('/getbyid/:id', (req, res) => {

    guideModel.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});

router.put('/update/:id', (req, res) => {

    guideModel.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});

module.exports = router;
