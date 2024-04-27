const express = require('express');
const { convertJsToTs, convertTsToJs } = require('./utilities');

const router = express.Router();

// Endpoint for converting JavaScript to TypeScript
router.post('/js-to-ts', (req, res) => {
    const { code } = req.body;

    // Convert JavaScript code to TypeScript
    const convertedCode = convertJsToTs(code);

    // Send the converted TypeScript code as the response
    res.send(convertedCode);
});

// Endpoint for converting TypeScript to JavaScript
router.post('/ts-to-js', (req, res) => {
    const { code } = req.body;

    // Convert TypeScript code to JavaScript
    const convertedCode = convertTsToJs(code);

    // Send the converted JavaScript code as the response
    res.send(convertedCode);
});

module.exports = router;
