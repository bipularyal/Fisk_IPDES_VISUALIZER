from bs4 import BeautifulSoup
import os
import requests
from selenium_fixer import get_website_data_edge as getData
import time

def getSmallData(website):
    # print(website, " data in fn")
    text = requests.get(website).text
    if text == "":
        return ""
    soup = BeautifulSoup(text,'lxml')
    return soup

def getWebsiteData(website):
    # print(website, " data in fn")
    response = getData(website)
    if response == "":
        return ""
    # print(response)
    soup = BeautifulSoup(response,'lxml')
    return soup


def saveDataToFile(soup,folder,name):
    if not os.path.exists(folder):
        os.makedirs(folder)
    with open(f'{folder}/{name}.html','w') as f:
        
        f.write(str(soup))

def getFileName(soup):
    feildNameOptions = soup.find("select", id = "select-surveys")
    # print(feildNameOptions)
    feild = feildNameOptions.find(selected = True).text.strip()
    feild = "_".join(feild.split(" "))
    return feild

def getAvailableSurveyValues(soup):
    feildNameOptions = soup.find("select", id = "select-surveys")
    if feildNameOptions:
        option_values = set()
        # Find all option elements within the select element
        options = feildNameOptions.find_all("option")
        # Iterate over options and add their 'value' attribute to the set
        for option in options:
            # Get the 'value' attribute of each option element
            value = option.get('value')
            if value:
                option_values.add(value)
        return option_values
    else:
        print("didnt work for gettinf values")
        return set()



def getAllHTMLFilesBetweenYears(endYear,startYear):
    for i in range(endYear,startYear-1,-1):
        smallData = getSmallData(f"")
        surveyNumbers = getAvailableSurveyValues(smallData)
        print(surveyNumbers)
        time.sleep(3)
        for each in surveyNumbers:
            site = f""
            # print(site)
            soup = getWebsiteData(site)
            # print(soup, " start")
            if soup == "":
                print(f"issues for year {i}")
                return
            else:
                fileName = getFileName(soup)
                # print(fileName)
                if not fileName or fileName == "":
                    print("fileNameIssues")
                    return
                saveDataToFile(soup, f'year_{i}',fileName)
                print(f"saved for year {i}, name {fileName}")
                time.sleep(5)
            



getAllHTMLFilesBetweenYears(2019,2001)

        
        
