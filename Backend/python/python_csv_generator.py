from bs4 import BeautifulSoup
import pandas as pd
import os
import webbrowser
from pathlib import Path
import shutil

pd.set_option('display.max_columns', None)  # None means unlimited
pd.set_option('display.max_rows', None)  # Be cautious with this as very large DataFrames can be unwieldy
pd.set_option('display.max_colwidth', None)  # Display full content of each column
pd.set_option('display.width', None)  # Auto-detect the display width

def saveDataToFile(df,year,folder,name):
    directory_path = f'../CSV_data/{year}/{folder}'
    if not os.path.exists(directory_path):
        os.makedirs(directory_path)
    filepath = f'{directory_path}/{name}.csv'
    df.to_csv(filepath, index=False)
    print(f"csv file saved at {filepath}")


def getListOfFileNames(folderPath):
    return os.listdir(folderPath)

def load_html_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return BeautifulSoup(file, 'html.parser').find("app-survey-summary-header")


# Function to open HTML files in the browser
def open_html_files_in_browser(file_paths):
    for file_path in file_paths:
        webbrowser.open(file_path.as_uri())

# Function to process each table
def process_tables(directory,year, folder):
        html_files = Path(directory).glob('*.html')
        for html_file in html_files:
            # Open HTML file in browser
            webbrowser.open(html_file.as_uri())

            # User decision
            decision = input(f"Keep table in {html_file.name}? (y/n): ").strip().lower()
            if decision == 'y' or len(decision) > 1:
                # Ask for CSV file name
                csv_file_name = input("Enter a name for the CSV file (without extension): ").strip() if decision == 'y' else decision.strip()
                # Convert to CSV
                df = pd.read_html(str(html_file))[0]
                saveDataToFile(df, year, folder, csv_file_name)

# Function to save individual tables as HTML files
def save_tables_as_html(soup, temp_folder):
    tables = soup.findAll("div", id = "pnl4YearWithGrad")
    file_paths = []
    # filter_texts = ["Adjusted" ]
    Path(temp_folder).mkdir(parents=True, exist_ok=True)
    for i, table in enumerate(tables):
        # if any(filter_text in table.get_text() for filter_text in filter_texts):
        file_name = f"table_{i+1}.html"
        file_path = Path(temp_folder) / file_name
        with open(file_path, 'w') as file:
            file.write(table.prettify())
        file_paths.append(file_path)

    return file_paths




fileNames = []
name = 'Fall_Enrollment.html'
for i in range(2020,2023):
    folderPath = f'path'
    if os.path.exists(folderPath):
        fileNames.append((folderPath,f'{i}'))
print(fileNames)
for each in fileNames:
    print()
    print()
    print(f"Started with year {each[1]}")
    print()
    print()
    data = load_html_file(each[0])
    # project_directory = os.path.expanduser('~/Desktop/FISK_IPDES_Proj')
    # temp_folder = os.path.join(project_directory, 'temp')
    # paths = save_tables_as_html(data,temp_folder)
    # process_tables(temp_folder,each[1],each)
    directory_path = f'path'
    if not os.path.exists(directory_path):
        os.makedirs(directory_path)
    with open(f'{directory_path}/{each[1]}.html','w') as f:
        f.write(str(data))
    
    print("completed processing")
    # shutil.rmtree(temp_folder)





# def extract_and_decide_tables(html_soup,year,fileName):
#     tables = html_soup.find_all('table')
#     for i, table in enumerate(tables):
#         df = pd.read_html(str(table))
#         print(f"Table {i+1}:")
#         print(df)
        
#         decision = input("Keep this table? (y/n): ").strip().lower()
#         if decision == 'y':
#             # Show columns with indices and ask for columns to drop
#             print("Columns:")
#             for index, column in enumerate(df.columns):
#                 print(f"{index}: {column}")
#             cols_to_drop = input("Enter column indices to drop (comma separated), or press enter to keep all: ").strip()
#             if cols_to_drop:
#                 cols_to_drop_indices = [int(index.strip()) for index in cols_to_drop.split(',') if index.strip().isdigit()]
#                 df.drop(df.columns[cols_to_drop_indices], axis=1, inplace=True)
#                 print("Table after dropping columns:")
#                 print(df)
            
#             # Show rows with indices and ask for rows to drop
#             print("Rows:")
#             for index, row in df.iterrows():
#                 print(f"{index}: {row.to_dict()}")
#             rows_to_drop = input("Enter row indices to drop (comma separated), or press enter to keep all: ").strip()
#             if rows_to_drop:
#                 rows_to_drop_indices = [int(index.strip()) for index in rows_to_drop.split(',') if index.strip().isdigit()]
#                 df.drop(rows_to_drop_indices, inplace=True)
#                 print("Table after dropping rows:")
#                 print(df)
#             table_name = input("Enter a name for this table: ").strip()
#             saveDataToFile(df,year,fileName,table_name)

            
#         elif decision == 'n':
#             print("Table discarded.")
#         else:
#             print("Invalid input. Table discarded.")
#         print()