const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const cors = require('cors');

const app = express();


const PORT = process.env.PORT || 4000;
app.use(cors()); // Enable CORS for development
const yearAPIs = require('./year_apis');
const rangeAPIs = require('./range_apis');

// Use the imported routers for specific routes
app.use('/api/year', yearAPIs);
app.use('/api/range', rangeAPIs);

const db = new sqlite3.Database(path.join(__dirname, '../Database/ipdes_database.db'), sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error('Error opening database', err);
  } else {
    console.log('Connected to the SQLite database.');
  }
});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
