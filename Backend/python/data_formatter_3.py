import math
import pandas as pd

# Load the data from the Excel file
df = pd.read_excel('fielname')

df[['CIPCode', 'Major']] = df['Code'].str.split(' - ', expand=True)
df[['Type', 'Degree']] = df['Degree'].str.split(' - ', expand=True)

# Convert 'Year' to int
df['Year'] = df['Year'].astype(int)

# Convert 'Men', 'Women', and 'Total' to int
df['Men'] = df['Men'].astype(int, errors='ignore')
df['Women'] = df['Women'].astype(int, errors='ignore')
df['Total'] = df['Total'].astype(int, errors='ignore')
df.insert(0, 'ID', range(1, len(df) + 1))
# If Degree is already correctly formatted, just rename the column
df.rename(columns={'Degree': 'DegreeType'}, inplace=True)

# Remove the original 'Code' column as it's redundant now
df.drop(columns=['Code'], inplace=True)
df.drop(columns=['Type'], inplace=True)

# Save the final DataFrame to a new Excel file
df.to_excel('filename', index=False)