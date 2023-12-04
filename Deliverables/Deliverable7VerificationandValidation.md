### **Deliverable 7: Verification and Validation**<a id="deliverable-7-verification-and-validation"></a>

### **Description**<a id="description"></a>

Our system is called Pinecone, and it is a web application that will be useful for students when enrolling in classes at the university. Pinecone is an application that is used to inform NAU students and have a more efficient and user-friendly approach to class enrollment. In an attempt to improve upon LOUIE, Pinecone has a focus on simplifying and expediting the enrollment research process, allowing students to make well-informed decisions, and ultimately helping them avoid unnecessary hardships and confusion throughout the semester. It will accomplish this by displaying professor ratings for each course in addition to class distribution data, so they can see how previous students performed in the class. It also allows students to see which courses fulfill their graduation requirements and automatically creates a calendar file for students to export into a calendar of their choosing. Here is a link to Pinecone’s GitHub: https\://github.com/UnlimitedDrip/ProjectPinecone


### **Verification**<a id="verification"></a>

Verification aims to ensure that you correctly developed the product. 

For this deliverable, show an example of a unit test that uses mock objects to isolate the class from the rest of the system. 

- Test framework you used to develop your tests (e.g., JUnit, unittest, pytest, etc.)

**Jest**

- Link to your GitHub folder where your automated unit tests are located.

<https://github.com/UnlimitedDrip/ProjectPinecone/tree/main/Testing>

- An example of a test case that makes use of mock objects. Include in your answer a GitHub link to the class being tested and to the test.

**Example: Tests the data retrieval of the professor information using mock objects of professor last names and fictional data.** 

**Test:** [link](https://github.com/UnlimitedDrip/ProjectPinecone/blob/main/Testing/InstructorInfo/Prototype.test.js)

**Class Being Tested:** [link](https://github.com/UnlimitedDrip/ProjectPinecone/blob/main/project_pinecone/Prototype.py#L58)

- A print screen showing the result of the unit tests execution. 

![](https://lh7-us.googleusercontent.com/JuDZ9qIB2VibQlLRofEakSsnshwWJElJyPr3woc2-cjPwfjtg8C480q7b8i1L48RUGRFVJJd0zzNifY819NpNJ-sOJWZm8T7X_xcXmhaenkvMdDIm1jMkH-TR6aS7TMXR5Djl1rQyKnyWT3HQr5xSjE)


### **Acceptance Test**<a id="acceptance-test"></a>

An acceptance test is a test that verifies the correct implementation of a feature from the user interface perspective. An acceptance test is a black box test (the system is tested without knowledge about its internal implementation). Provide the following information:

- Test framework you used to develop your tests (e.g., Selenium, Katalon Studio, Espresso2, Cucumber, etc.)

**Selenium and Pytest**

- Link to your GitHub folder where your automated acceptance tests are located.

<https://github.com/UnlimitedDrip/ProjectPinecone/tree/main/Testing>

- An example of an acceptance test. Include in your answer a GitHub link to the test and an explanation about the tested feature.

**Test\[**[link](https://github.com/UnlimitedDrip/ProjectPinecone/blob/main/Testing/tester.py)**]**

**Example: User submits “CS 105” and “Amresh” then presses submits**

**For this test, we tested the main feature of the website. We tested it using the website and a browser. We had to test for inputs of arbitrary inputs and the corresponding outputs. Furthermore, we tested for professor output and course output after hitting the submit button on our home screen.** 

\
\
\


- A print screen/video showing the acceptance test execution. 

![](https://lh7-us.googleusercontent.com/OYU1oIcTJTP_i_DPyIhAeAAShdyXN46bC1GABEA4vKUXqSdfUGrQ2OHXKjkSLxyFLqeDllCWI-4yTqgtcT3aMt26Rw4IQmUpWC48HQQ-33x4im0z27FC3kEjOJS81mxvuqRcCdJX4t0VIKRdZDaLWtc)


### **Validation**<a id="validation"></a>

At the beginning of the semester, you talked to the clients/potential users to understand their needs. Now it is time to check if you are on the right track by conducting some user evaluation on the actual system. Include in this deliverable the following information:

**Script:** We collected user’ opinions on the website and its features using this Google form.

<https://forms.gle/A2dburkCUxvNPkPH6>

**Tasks:** Try checking the information for a computer science class and related professor.

Example Inputs: First Input “CS 386” Second Input “Palmer”

**Questions:** 

What are your thoughts on the look and feel of the website?

Does the website feel responsive when you interact with its elements?

Can you see yourself using this website to get information regarding your classes?

Is there anything missing from the website that you want to suggest?

**Results:** 

The data we collected can be seen [here](https://docs.google.com/spreadsheets/d/1cQ_ZjBNqHUHHvf7RrW0OYlVWOeRWQx1D8KK8vjXNmw0/edit?usp=sharing). 

From our results, most users seemed satisfied with the website and enjoyed our design for it. However, there was some valuable information that they gave to us after using the website with a fresh set of eyes. They experienced some minor issues with the UI and gave us feedback on how to make the website even easier to use for someone who has not used it before. 

Corrections: 

- Users want more information on the format of inserting search queries into the website

- Users also mentioned that they were having some issues with the format of the website, the cards were not scaling properly.

What we got right:

- Users enjoyed the look and feel of the website, they said it was minimalistic and easy on the eyes.

**Reflections**: Overall our project reached its main goal but had some small shortcomings that we are eager to address in the upcoming weeks. 

**What features worked well?**

- Users said they enjoyed using our main feature to help them look up information for classes.

- They liked how it displayed on the main screen using the cards

**What can be changed?**

- Users mentioned that there was some scaling issue with the CSS on large resolutions like 1440p or 4k. 

- Adding an example of how the class name should look like for the search will help, e.g. “CS 386”

- We also are going to change some of the vocabulary and grammar of the website to make it more professional.

**How is the learning curve of the system?**

- According to the users, the learning curve is pretty easy and intuitive that can be made better with some small tweaks.

**Did the users perform the tasks as you expected?**

- Yes, users were able to explore our website and use the features as requested with little to no guidance other than how to get to the website. 

**Did the users’ actions produce the results they expected?**

- According to our response form, users were satisfied with the results that came back when they looked up a class or professor’s information. 

- None of the users mentioned that the website was behaving in a fashion that was not expected.

**What did the users like the most?**

- Most users mentioned that they enjoyed the UI of the website

- They also seemed excited about using this website when doing research for their future classes.

**Is your value proposition accomplished?**

I believe that our value proposition has been accomplished because users saw the value in using our product, and they agreed with the value proposition statement. In our value proposition statement, we had the goal of making a place where NAU students could search up everything they needed to know about a class in one website. By having this website, students would only need to use one website when enrolling in classes, therefore saving them time and informing them of everything they could possibly know about a class before it begins. 
