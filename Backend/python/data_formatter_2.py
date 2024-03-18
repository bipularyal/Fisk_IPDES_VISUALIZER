import math
import pandas as pd

# Load the data from the Excel file
df = pd.read_excel('/Users/bipularyal/Desktop/FISK_IPDES_Proj/Backend/Excel/Major_Sheet_P2.xlsx')

# Group by 'Code', 'Degree', and 'Year', summing 'Men', 'Women', and 'Total'
df_grouped = df.groupby(['Code', 'Degree', 'Year'], as_index=False).agg({
    'Men': 'sum',
    'Women': 'sum',
    'Total': 'sum'
})

# Save the final DataFrame to a new Excel file
df_grouped.to_excel('/Users/bipularyal/Desktop/FISK_IPDES_Proj/Backend/Excel/Major_Sheet_P3.xlsx', index=False)