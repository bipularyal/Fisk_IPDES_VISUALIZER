import sqlite3

# Connect to your SQLite database
conn = sqlite3.connect('../Database/ipdes_database.db')
cur = conn.cursor()

# Get all table names
cur.execute("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name;")
tables = cur.fetchall()

# For each table, select the first 5 rows
for table in tables:
    table_name = table[0]
    print(f"First 5 rows from {table_name}:")
    cur.execute(f"SELECT * FROM {table_name} LIMIT 5;")
    rows = cur.fetchall()
    for row in rows:
        print(row)
    print("\n")  # Print a newline for better readability between tables

# Close the connection
conn.close()
