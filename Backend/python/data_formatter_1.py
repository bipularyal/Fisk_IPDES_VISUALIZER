import math
import pandas as pd

# Load the data from the Excel file
df = pd.read_excel('/Users/bipularyal/Desktop/FISK_IPDES_Proj/Backend/Excel/Major_Sheet_P2.xlsx')
cleaned_df = df.dropna(subset=['Code', 'Degree'], how='all')
df.to_excel('/Users/bipularyal/Desktop/FISK_IPDES_Proj/Backend/Excel/Major_Sheet_P2.xlsx', index=False)

# Create new columns initialized with zeros
df['Men'] = 0
df['Women'] = 0
df['Total'] = 0
# Iterate through the DataFrame in steps of 3 to process groups of Men, Women, and Total
for start in range(0, len(df), 3):
    men_count = df.loc[start, 'Count']
    women_count = df.loc[start + 1, 'Count']
    total_count = df.loc[start + 2, 'Count']

    
    # Update the 'Men', 'Women', and 'Total' columns with the corresponding counts
    df.loc[start, 'Men'] = men_count
    df.loc[start, 'Women'] = women_count
    df.loc[start, 'Total'] = total_count
    if not pd.isna(df.loc[start + 1, 'Code']):
        df.loc[start, 'Code'] = str(df.loc[start, 'Code']) + " - " + str(df.loc[start + 1, 'Code'])
    if not pd.isna(df.loc[start + 2, 'Code']):
        df.loc[start, 'Code'] = str(df.loc[start, 'Code']) + " - " + str(df.loc[start + 2, 'Code'])
    if not pd.isna(df.loc[start + 1, 'Degree']):
        df.loc[start, 'Degree'] = f'{df.loc[start, 'Degree']}' + " - " + str(df.loc[start + 1, 'Degree'])
    if not pd.isna(df.loc[start + 2, 'Degree']):
        df.loc[start, 'Degree'] = f'{df.loc[start, 'Degree']}' + " - " + str(df.loc[start + 2, 'Degree'])
    # Concatenate 'Code' and 'Degree' with ' - ' and update the first row of the group

# Keep only the rows we updated (i.e., the first row of each group)
df = df.iloc[::3, :].reset_index(drop=True)

# Drop the 'Gender' column as it's no longer needed
df.drop('Gender', axis=1, inplace=True)

# Save the modified DataFrame to a new Excel file
df.to_excel('/Users/bipularyal/Desktop/FISK_IPDES_Proj/Backend/Excel/Major_Sheet_P2.xlsx', index=False)