import subprocess
import os

def open_files_with_excel(fileName):
    if not os.path.isfile(fileName):
        print("File does not exist")
        return False
    print(f"Opening {fileName} with Excel...")
    subprocess.call(['open', '-a', 'Microsoft Excel', fileName])
    
    # Wait for the user input before continuing to the next file
    ipt = input("Press Enter after you're done with this file to continue to the next one...")
    if ipt.strip().lower() != "y":
        return False
    return True

def openAllOfCategory(category,dir_path):
    for each in range(2014,2023):
        fileName = f'{dir_path}year_{each}/{category}.html'
        print(f"\n\n\n Opening {category} of year {each} \n\n\n")
        if not open_files_with_excel(f"{fileName}"):
            print("error. Not saved")
            return
        print(f"\n\n\n WoooooHOOOO with {category} od year {each} \n\n\n")
dir_path = '/Users/bipularyal/Desktop/FISK_IPDES_Proj/HTML_files/'
category = "Admissions_and_Test_Scores"
openAllOfCategory(category,dir_path)
