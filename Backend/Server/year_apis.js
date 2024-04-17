// range_apis.js
const express = require('express');
const router = express.Router();
const {individualQueries } = require('./data.js');
const db = require('./database'); // Adjust the path to where your database.js file is

// Endpoint to get data based on a range
router.get('', (req, res) => {
    const { year, dataType, detail } = req.query;

    // Mock database query response
    const query = individualQueries[dataType][detail]
    const params = [year]
    db.all(query, params, (err, rows) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ success: false, message: 'Internal server error' });
      }
      console.log(rows)
      heading = `${dataType} --- ${detail}`
      res.json({ success: true, values: rows, type: "year_single", label:heading});
    });

});

module.exports = router;
