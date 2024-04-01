import pandas as pd
import sqlite3

# Load the CSV file
file_path = 'filename'  # Change this to your file's path
df = pd.read_excel(file_path)


def format_column_name(name):
    return name.strip().lower().replace(" ", "_")


df.columns = [format_column_name(col) for col in df.columns]
# Display column headers
print("Current column headers:")
for column in df.columns:
    print(column)

# Left: Expenses Sheet

# Ask if user wants to change headers
change_headers = input("Do you want to change any column headers? (yes/no): ").strip().lower()
if change_headers == 'yes':
    for i, column in enumerate(df.columns):
        new_name = input(f"Enter new name for '{column}' (or press enter to keep it): ").strip()
        if new_name:
            df.rename(columns={column: new_name}, inplace=True)

# Display updated column headers and ask for table and primary key names
print("Updated column headers:")
for column in df.columns:
    print(column)

table_name = input("Enter the table name for the database: ").strip()
primary_key = input("Enter the primary key's name (must match one of the column headers): ").strip()

# Ensure the primary key exists in the columns
if primary_key not in df.columns:
    print("Error: The specified primary key does not exist in the columns.")
    exit()

# Create or connect to SQLite database
conn = sqlite3.connect('../Database/ipdes_database.db')
cursor = conn.cursor()

# Generate SQL command to create table
columns_with_types = [f"{col} TEXT" for col in df.columns if col != primary_key]
columns_with_types.insert(0, f"{primary_key} INTEGER PRIMARY KEY")  # Assuming the primary key is an integer
create_table_sql = f"CREATE TABLE IF NOT EXISTS {table_name} ({', '.join(columns_with_types)});"

# Execute SQL command
cursor.execute(create_table_sql)

# Commit changes and close the connection
conn.commit()
conn.close()

print(f"Table '{table_name}' created successfully.")
