// range_apis.js
const express = require('express');
const router = express.Router();
const { rangeData, individualData } = require('./data.js');


// Endpoint to get data based on a range
router.get('', (req, res) => {
    const { year, dataType, detail } = req.query;

    // Mock database query response
    const data = `Fetched ind data for ${dataType} for year ${year} with detail: ${detail}`;

    res.json({
        message: "Fetched individual data",
        year,
        dataType,
        detail,
        data // Replace with actual database query result
    });
});

module.exports = router;
