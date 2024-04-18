// range_apis.js
const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const { rangeQueries } = require('./data.js');
const db = require('./database'); // Adjust the path to where your database.js file is


// Endpoint to get data based on a range
router.get('', (req, res) => {
  const { startYear, endYear, dataType, detail } = req.query;

  // Mock database query response
  // const data = `Fetched range data for ${dataType} from ${startYear} to ${endYear} with detail: ${detail}`;
  //  Handle for CompletionByMajor differently
  let query = `SELECT year, ${detail} FROM ${dataType} WHERE year BETWEEN ? AND ? GROUP BY year`
  const params = [startYear,endYear]
  if (dataType == "CompletionByMajor"){
    params.push(detail)
    query = rangeQueries[dataType]['all']
  }
  if (detail in rangeQueries[dataType]){
    query = rangeQueries[dataType][detail]
  }
  
  db.all(query, params, (err, rows) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ success: false, message: 'Internal server error' });
      }
      console.log(rows)
      res.json({ success: true, values: rows, type: "range", section:dataType, subSection: detail});
    });
  });

module.exports = router;
