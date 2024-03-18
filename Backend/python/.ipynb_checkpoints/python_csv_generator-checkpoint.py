from bs4 import BeautifulSoup
import pandas as pd
import os
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
        return BeautifulSoup(file, 'html.parser')

def extract_and_decide_tables(html_soup,year,fileName):
    tables = html_soup.find_all('table')
    for i, table in enumerate(tables):
        df = pd.read_html(str(table))
        print(f"Table {i+1}:")
        print(df)
        
        decision = input("Keep this table? (y/n): ").strip().lower()
        if decision == 'y':
            # Show columns with indices and ask for columns to drop
            print("Columns:")
            for index, column in enumerate(df.columns):
                print(f"{index}: {column}")
            cols_to_drop = input("Enter column indices to drop (comma separated), or press enter to keep all: ").strip()
            if cols_to_drop:
                cols_to_drop_indices = [int(index.strip()) for index in cols_to_drop.split(',') if index.strip().isdigit()]
                df.drop(df.columns[cols_to_drop_indices], axis=1, inplace=True)
                print("Table after dropping columns:")
                print(df)
            
            # Show rows with indices and ask for rows to drop
            print("Rows:")
            for index, row in df.iterrows():
                print(f"{index}: {row.to_dict()}")
            rows_to_drop = input("Enter row indices to drop (comma separated), or press enter to keep all: ").strip()
            if rows_to_drop:
                rows_to_drop_indices = [int(index.strip()) for index in rows_to_drop.split(',') if index.strip().isdigit()]
                df.drop(rows_to_drop_indices, inplace=True)
                print("Table after dropping rows:")
                print(df)
            table_name = input("Enter a name for this table: ").strip()
            saveDataToFile(df,year,fileName,table_name)

            
        elif decision == 'n':
            print("Table discarded.")
        else:
            print("Invalid input. Table discarded.")
        print()

year = 2022
folderPath = f'../../HTML_files/year_{year}/'
fileNames = getListOfFileNames(folderPath)
print(fileNames)
for each in fileNames:
    completePath = f'../../HTML_files/year_{year}/{each}'
    data = load_html_file(completePath)
    extract_and_decide_tables(data,year,each)
