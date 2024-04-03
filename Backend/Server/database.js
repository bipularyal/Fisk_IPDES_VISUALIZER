// database.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Initialize and export the database connection
const dbPath = path.join(__dirname, '../Database/ipdes_database.db');
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

module.exports = db;
