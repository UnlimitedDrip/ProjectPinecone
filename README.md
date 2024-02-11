# [Project Pinecone](https://github.com/UnlimitedDrip/ProjectPinecone/)

Our system is called Pinecone, and it is a web application that will be useful for students when enrolling in classes at the university. Pinecone is an application that is used to inform NAU students and have a more efficient and user-friendly approach to class enrollment. In an attempt to improve upon LOUIE, Pinecone has a focus on simplifying and expediting the enrollment research process, allowing students to make well-informed decisions, and ultimately helping them avoid unnecessary hardships and confusion throughout the semester. It will accomplish this by displaying professor ratings for each course in addition to class distribution data, so they can see how previous students performed in the class. It also allows students to see which courses fulfill their graduation requirements and automatically creates a calendar file for students to export into a calendar of their choosing.


## [Getting Started](https://github.com/UnlimitedDrip/ProjectPinecone/#getting-started)

Download the folder titled "project\_pinecone" to get a local version of the web application running on your machine.

Once you have the files downloaded, you can see a local version of the website by clicking the index.html file to interact with the website.


### [Prerequisites](https://github.com/UnlimitedDrip/ProjectPinecone/#prerequisites)

- Flask
- Python

### [Installing](https://github.com/UnlimitedDrip/ProjectPinecone/#installing)

Install the project by downloading our latest release, then extract the zip into a folder.

Install pip and python if you havent already. 

Install Flask by running "pip install flask" in your terminal.

To run the program, traverse to the directory titled "project_pinecone" then use your terminal to execute "python run.py". If everything was installed correctly you should be able to access the project using the address given to you.


## [Running the tests](https://github.com/UnlimitedDrip/ProjectPinecone/#running-the-tests)

1. Installed Jest from the main website
   
2. Exported function Display from Prototype.js which functions as our main

3. Created a .test.js file to conduct our testing
   
4. In the .test.js created multiple testings to check if the object from the JS is returning the right data by comparing it to the expected data
   
5. Run npm test -- --coverage to run the testing


### [Break down into end to end tests](https://github.com/UnlimitedDrip/ProjectPinecone/#break-down-into-end-to-end-tests)

test('Professor difficulty works', () => 
{expect(display("CS 105", "Leverington").difficulty).toEqual('4.8/5');});

This test check if the input from the user is apropiately being matched with the object in the array using function findProfessorByLastName.

### [And coding style tests](https://github.com/UnlimitedDrip/ProjectPinecone/#and-coding-style-tests)

test('Professor Rating works', () => 
{expect(display("CS 105", "Otte").rating).toEqual('3.4/5');});

The reason behind this structure for the testing is to allow the tester to return an entire object instead of an specific part of the object to compared it with a certain value and it is also the best acommodation to test using Jest.


## [Deployment](https://github.com/UnlimitedDrip/ProjectPinecone/#deployment)

To deploy this on a live system, a database needs to be connected or API for Rate My Professor. The website needs to be hosted on a hosting platform as well. We chose Host Winds.


## [Built With](https://github.com/UnlimitedDrip/ProjectPinecone/#built-with)

- [https://www.hostwinds.com/](http://www.dropwizard.io/1.0.2/docs/) - web hosting on Host Winds


## [Contributing](https://github.com/UnlimitedDrip/ProjectPinecone/#contributing)

Please read [CONTRIBUTING.md](https://github.com/UnlimitedDrip/ProjectPinecone/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.


## [Authors](https://github.com/UnlimitedDrip/ProjectPinecone/#authors)

- **Aaron Santiago** - _Features_
- **Daniel Minichetti** - _Initial website_
- **Sergio Rabadan** - _Initial Features_
- **Thomas Rhode** - _Features_

## [License](https://github.com/UnlimitedDrip/ProjectPinecone/#license)

This project is licensed under the MIT License - see the [LICENSE.md](https://gist.github.com/PurpleBooth/LICENSE.md) file for details


## [Acknowledgments](https://github.com/UnlimitedDrip/ProjectPinecone/#acknowledgments)

- Rate My Professor
- LOUIE
- TEesting
