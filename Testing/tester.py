# test_web_page.py
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

def test_input_fields():
    # Start a new instance of the Firefox driver
    driver = webdriver.Firefox()

    try:
        driver.get("http://sergiorabadan.com/project_pinecone/")

        course_input = driver.find_element(By.ID, "Course")
        last_input = driver.find_element(By.ID,"Last")

        course_input.send_keys("CS 105")
        last_input.send_keys("Amresh")
        
        submit_button = driver.find_element(By.XPATH,"//input[@value='Enter']")
        submit_button.click()
   
        output_element = driver.find_element((By.ID),"output")
        result = output_element.text
        expected_result = ["Instructor Information", "Ashish Amresh"]

        output_2 = driver.find_element((By.ID),"output1")
        result1 = output_2.text
        expected_result1 = ["Course Information", "Percentage of Students who passed with a 'C' or Higher: 57.49% "]
        assert any(keyword in result1 for keyword in expected_result1), f"Expected one of {expected_result1}, but got {result1}"


    finally:

        driver.quit()
