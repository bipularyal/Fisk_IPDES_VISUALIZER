// range_apis.js
const express = require('express');
const router = express.Router();

// Endpoint to get available details based on the dataType
router.get('/getAvailableDetails/:dataType', (req, res) => {
    const { dataType } = req.params;

    // Here you would query your database or lookup a dictionary to find available details
    // based on the dataType. This is a mock response.
    const details = {
        enrollment: ["Race", "Gender", "Major"],
        // Add other dataTypes and their details as needed
    };

    res.json({
        dataType,
        details: details[dataType] || []
    });
});

// Endpoint to get data based on a range
router.get('/getData', (req, res) => {
    const { startYear, endYear, dataType, detail } = req.query;

    // Mock database query response
    const data = `Fetched data for ${dataType} from ${startYear} to ${endYear} with detail: ${detail}`;

    res.json({
        message: "Fetched range data",
        startYear,
        endYear,
        dataType,
        detail,
        data // Replace with actual database query result
    });
});

module.exports = router;
