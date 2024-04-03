import sqlite3

# Path to your SQLite database
db_path = '../Database/ipdes_database.db'

# Connect to the SQLite database
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Get a list of all tables in the database
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetchall()

# Loop through all tables
for table_name in tables:
    table_name = table_name[0]
    print(f"Column headers in '{table_name}':")
    
    # Get the column headers for the current table
    cursor.execute(f"PRAGMA table_info({table_name});")
    columns = cursor.fetchall()
    
    # Print each column header
    for column in columns:
        print(column[1])  # Column name is in the second position

    print()  # Print a newline for readability

# Close the connection
conn.close()
