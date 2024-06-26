// range_apis.js
const express = require('express');
const router = express.Router();
const {individualQueries } = require('./data.js');
const db = require('./database'); // Adjust the path to where your database.js file is

// Endpoint to get data based on a range
router.get('', (req, res) => {
    const { year, dataType, detail,chartType } = req.query;

    // Mock database query response
    const query = individualQueries[dataType][detail]
    const params = [year]
    db.all(query, params, (err, rows) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ success: false, message: 'Internal server error' });
      }

      if (rows.length > 0 && 'key' in rows[0] && 'value' in rows[0]){
        const values = {}
        for (const item in rows){
          values[rows[item]['key']] = rows[item]['value']
        }
        rows = [values]
      }
      if (rows.length > 0 && 'year' in rows[0]){
        delete rows[0].year;
      }

      console.log(rows)
      res.json({ success: true, values: rows, dataType: "single", section: dataType, subSection:detail,chartType:chartType});
    });

});

module.exports = router;
