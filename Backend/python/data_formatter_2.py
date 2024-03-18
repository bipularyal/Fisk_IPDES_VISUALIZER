import math
import pandas as pd

# Load the data from the Excel file
df = pd.read_excel('path')

# Group by 'Code', 'Degree', and 'Year', summing 'Men', 'Women', and 'Total'
df_grouped = df.groupby(['Code', 'Degree', 'Year'], as_index=False).agg({
    'Men': 'sum',
    'Women': 'sum',
    'Total': 'sum'
})

# Save the final DataFrame to a new Excel file
df_grouped.to_excel('path', index=False)