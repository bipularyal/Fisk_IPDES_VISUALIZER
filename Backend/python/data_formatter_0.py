import pandas as pd

# Load the Excel file
file_path = '/Users/bipularyal/Desktop/FISK_IPDES_Proj/Backend/Excel/Completons_By_Major.xlsx'
df = pd.read_excel(file_path)

# Initialize an empty list to store the DataFrames for each year
data_frames = []

# The number of expense types (rows) we have
num_expense_types = df.shape[0]

# The pattern of columns is 4 per year, and the last year has an additional 2 columns for totals
# We will handle totals separately
num_years = int((df.shape[1]) / 4)
print(num_years)
# Process each year
for i in range(num_years):
    # Calculate the index of the first column for the current year
    # print(i,2010 + i)
    start_col = i * 4
    
    # Select the columns for the current year
    year_df = df.iloc[:, start_col:start_col + 4].copy()
    
    # Add a 'Year' column to the DataFrame
    year_df['Year'] = 2010 + i

    # Rename columns to have a uniform structure before concat
    year_df.columns = ["Code","Degree","Gender","Count","Year"]
    
    # Append the DataFrame for the current year to our list
    data_frames.append(year_df)

# Concatenate all DataFrames in our list into a single DataFrame
long_format_df = pd.concat(data_frames).reset_index(drop=True)
print(long_format_df)
# Save the reshaped DataFrame into a new Excel file
output_file_path = '/Users/bipularyal/Desktop/FISK_IPDES_Proj/Backend/Excel/Major_Sheet_Initial.xlsx'
long_format_df.to_csv(output_file_path, index=False)
long_format_df.to_excel(output_file_path, index=False)

