// range_apis.js
const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const { rangeQueries, individualData } = require('./data.js');
const db = require('./database'); // Adjust the path to where your database.js file is


// Endpoint to get data based on a range
router.get('', (req, res) => {
    const { startYear, endYear, dataType, detail } = req.query;

    // Mock database query response
    const data = `Fetched range data for ${dataType} from ${startYear} to ${endYear} with detail: ${detail}`;

    let query = `SELECT year, ${detail} FROM ${dataType} WHERE year BETWEEN ? AND ? GROUP BY year`
      if (rangeQueries[dataType][detail]){
        const query = rangeQueries[dataType][detail];
      }
    

    db.all(query, [startYear, endYear], (err, rows) => {
        if (err) {
          console.error('Database error:', err);
          return res.status(500).json({ success: false, message: 'Internal server error' });
        }
        console.log(rows)
        heading = `${dataType} --- ${detail}`
        res.json({ success: true, data: rows, type: "bar", label:heading});
      });
    });

module.exports = router;
