**D.5 Design\
Description**<br>
Our system is called Pinecone, and it is a web application that will be useful for students when enrolling in classes at the university. Pinecone is an application that is used to inform NAU students and have a more efficient and user-friendly approach to class enrollment. In an attempt to improve upon LOUIE, Pinecone has a focus on simplifying and expediting the enrollment research process, allowing students to make well-informed decisions, and ultimately helping them avoid unnecessary hardships and confusion throughout the semester. It will accomplish this by displaying professor ratings for each course in addition to class distribution data, so they can see how previous students performed in the class. It also allows students to see which courses fulfill their graduation requirements and automatically creates a calendar file for students to export into a calendar of their choosing. In summary, the structure of our system will be a web application connected to a database that pulls information from the database and Rate My Professor API to display information to the user at their request.

**Architecture**![](https://lh7-us.googleusercontent.com/xdlx3JUjRGPxQtV3h2E2q7MUuuYVtJSygeC1X_Vs5xreme8tg2Zabt-orwoAwQtOOkbRCAW-5r8YtMZZ418mEPMSqRwa7QAROyBZPNo75Szbu7yLY4PLkVGIYAdaldsG4bIwHS-1Qtw4eRtc09mj9t8)

**Rationale:** The pinecone project consists of three main layers. Those components are the web application, the database and the code “background logic” that presents the data based on a user input to request that data. The system is designed this way to ensure modularity and scalability to multiple users. In summary, the system is modular and is secure by ensuring that users can only access the User Interface section, so they cannot break the background logic or access the database directly from it. 

**Class diagram**![](https://lh7-us.googleusercontent.com/XzG-L_jw65IgE9xKUCGFPa7dA10qWzWickLc5xYCaf9y30ooajTlYkkF9xQF_4F8MvBq80Sa0z-FUJ7ORUoaqjLNJ5tWpLaD9O2s--xDApoXvA5emFm9Vu7NQT-_6m55_iyZouZ45R-y6vlEYoNRBA)

**Rationale:** We added sections for the main two components (the database and the website) and how they interact with each of these components to deliver the functionality we need. In addition, each attribute has been given a type we each class know what to expect to receive at any given step.

**Sequence diagram**<br>![](https://lh7-us.googleusercontent.com/UrCJWufE5urReeZuGtZMtlCA8A9scc6tVU3nS_RS14rQk2hh7UDAIsYUyp4Kiu935HKv8EewGji1WWYLcj30G8SzEbEfleMcVO8581W-wxjYsMuoVvXdth8ZPkradyzmXK281nMnEbriFN56sb6r6A)

Student inputs the desired Instructor’s name, which is sent to the JavaScript that runs an API to retrieve the Instructor’s information, and then this information is sent back to the JavaScript to create an object. Using the object, a string is created and passed back to the HTML for display.

### **Design Patterns**![](https://lh7-us.googleusercontent.com/c32qLkmxNdYFDnZQMH9VLTVGUsrXGmDLfplj_OmfDh4CSb9Z0O8E1K3g1_PBVg2w2KbAyHpGBsWakmA0lUH4_BDt08LbAL2uFk7HfLsA1RIZ02UvgGkIZ0UHJBzBb8Ed7Mmqp_h56iPsWsptCLepkqc)
Github link: <https://github.com/UnlimitedDrip/ProjectPinecone/blob/main/project_pinecone/assets/js/Prototype.js><br>
The UML diagram above is modeled after our javascript would be closest to that of the behavioral design pattern as the main idea of the code is retrieving and displaying the correct data based on user input. While the code we use is more procedural, it still primarily is focused on user interactions and object behaviors which aligns it closest to the behavioral pattern.****![](https://lh7-us.googleusercontent.com/ktREb3CnEGClDf6zl4hc-i3NBTl4MmuQdMO5L8ov331Be-Jym-BgE77eYy-lVILtG5uK5VMHwQxphWOEakyFKI3nNUhZuthVAVcmKSLLzTaX8SY29pl1Q2y4qDO_epMfg0k4hs-wxr2onJH5DK5RTvM)****

Github link: <https://github.com/UnlimitedDrip/ProjectPinecone/blob/main/project_pinecone/assets/js/calendarFileInput.js><br>
This UML diagram deals with the implementation of our import button that users can use for when they want to import .ics file into our calendar creator, the Event handling web page represents the user interface where the handling code is executed. The import from file button has an event listener to trigger a click on “calenderFileInput”, which is a hidden file input that handles file selection.This UML diagram would somewhat align with the structural design pattern, which focuses on the composition of classes and objects to organize larger structures. In this case, this code is designed to structure and format the user's calendar into our website. This is accomplished through the event listeners which is a typical feature in structural design.

### **Design Principles**

Single Responsibility Principle (SRP)
- On our website, we only create a class to display only the data that will be displayed on the website, which avoids unnecessary information not to give a class a second responsibility in our code.

Open/Closed Principle
- On our javascript which holds the professor data, the data itself is open for extension if there was another data parameter for instance that we wanted to include in our display results. 

Liskov’s Substitution Principle (LSP)
- On our JavaScript, we create all our objects in the same way, so if we would have to make a copy from one of our objects, the children would have precisely the same properties.

Interface Segregation Principle (ISP) 
- Our displays work entirely based on the user input, meaning that if they only want to look for the instructor’s information, leaving the class information on the side, they will only get the instructor’s information. This same logic applies to getting the class information.

Dependency Inversion Principle (DIP)
- In our JavaScript and for our input we ensure that we immediately use variables to capture and transfer the input to our search functions. We use abstractions as bridges between different layers. We use one for the input and one for accessing the database.This design not only enhances the clarity of our code but also fosters a more modular and adaptable architecture. 

