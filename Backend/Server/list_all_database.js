const sqlite3 = require('sqlite3').verbose();

// Path to your SQLite database
let dbPath = '../Database/ipdes_database.db';

// Connect to the SQLite database
let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
    if (err) {
        console.error('Could not connect to database:', err);
        return;
    }
    console.log('Connected to the SQLite database.');
});

// Query to select all table names
const query = "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';";

db.all(query, [], (err, rows) => {
    if (err) {
        console.error('Error fetching tables:', err);
        return;
    }
    if(rows.length) {
        console.log('Tables in the database:');
        rows.forEach((row) => {
            console.log(row.name);
        });
    } else {
        console.log('No tables found in the database.');
    }
});

// Close the database connection
db.close((err) => {
    if (err) {
        console.error('Error closing the database connection:', err);
        return;
    }
    console.log('Closed the database connection.');
});
