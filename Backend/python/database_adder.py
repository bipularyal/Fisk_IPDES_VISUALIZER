# import pandas as pd
# import sqlite3

# # # Load the CSV file
# FileNames = ["Twelve Month Enrollment", "Admissions Data", "Completion Stats","Cost Of Attendence","Expenses","Fall Enrollment By Race","Completion By Major","Graduation Rate Eight Years","Graduation Rates","Library Digital", "Library Physical","Revenues","Student Aid","Total Assets", "Fall Enrollment Stats"]
# TableNames = ["TwelveMonthEnrollment","AdmissionsData","CompletionStats","CostOfAttendence","Expenses","FallEnrollmentByRace","CompletionByMajor","GraduationRateEightYears","GraduationRates","LibraryDigital","LibraryPhysical","Revenues","StudentAid","TotalAssets", "FallEnrollmentStats"]

# for i in range(len(FileNames)):
#     file_path = f'../Excel/{FileNames[i]}.xlsx'  # Change this to your file's path
#     df = pd.read_excel(file_path)


#     def format_column_name(name):
#         return name.strip().lower().replace(" ", "_")


#     df.columns = [format_column_name(col) for col in df.columns]
#     # Display column headers
#     print("Current column headers:")
#     for column in df.columns:
#         print(column)

#     table_name = TableNames[i]
#     primary_name = "id" if "id" in df.columns else "year"
#     # Create or connect to SQLite database
#     conn = sqlite3.connect('../Database/ipdes_database.db')
#     cursor = conn.cursor()

#     # Generate SQL command to create table
#     columns_with_types = [f"{col} TEXT" for col in df.columns if col != primary_name]
#     columns_with_types.insert(0, f"{primary_name} INTEGER PRIMARY KEY")  # Assuming the primary key is an integer
#     create_table_sql = f"CREATE TABLE IF NOT EXISTS {table_name} ({', '.join(columns_with_types)});"
#     cursor.execute(create_table_sql)

#     df.to_sql(name=table_name, con=conn, if_exists='append', index=False)
#     # Execute SQL command

#     # Commit changes and close the connection
#     conn.commit()
#     conn.close()

#     print(f"Table '{table_name}' created successfully.")



