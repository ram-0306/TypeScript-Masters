const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');
const Feedback = require('../models/Feedback');


router.post('/add', (req, res) => {
    console.log(req.body);

    // to save data in mongodb
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});

router.get('/getall', (req, res) => {
    
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// : denotes url parameter
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.put( '/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})
router.post('/feedback/add', async (req, res) => {
    try {
      // Extract data from request body
      const { name, email, subject, message } = req.body;
  
      // Create a new feedback document
      const feedback = new Feedback({
        name,
        email,
        subject,
        message
      });
  
      // Save the feedback document to the database
      await feedback.save();
  
      // Respond with success message
      res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      // Respond with error message
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = router;