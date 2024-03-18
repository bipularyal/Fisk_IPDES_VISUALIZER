from selenium import webdriver
from selenium.webdriver.edge.service import Service
from selenium.webdriver.edge.options import Options as EdgeOptions
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def get_website_data_edge(url):
    # Set up Edge options
    options = EdgeOptions()
    options.add_argument("--headless")  # Runs Edge in headless mode

    # Specify the path to Edge WebDriver
    service = Service(executable_path="path")

    # Initialize the WebDriver
    driver = webdriver.Edge(service=service, options=options)

    try:
        # Navigate to the website
        driver.get(url)
        # Wait for the necessary page elements to load, if needed
        # ... (You may want to add explicit waits here)
        # Get the page source
        # Wait until the element is loaded
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, 'facsimile_assets'))
        )

        html_content = driver.page_source
        return html_content
    finally:
        driver.quit()


