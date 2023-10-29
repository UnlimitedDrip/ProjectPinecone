const professors = [
    {
        firstName: 'Ashish',
        lastName: 'Amresh',
        rating: '2.6/5',
        difficulty: '1.9/5',
        link: 'https://www.ratemyprofessors.com/professor/1356382'
    },
    {
        firstName: 'Paul',
        lastName: 'Bakke',
        rating: '3.4/5',
        difficulty: '2.5/5',
        link: 'https://www.ratemyprofessors.com/professor/2678904'
    },
    {
        firstName: 'Ana',
        lastName: 'Chaves',
        rating: '2.9/5',
        difficulty: '4.4/5',
        link: 'https://www.ratemyprofessors.com/professor/2822538'
    },
    {
        firstName: 'Eck',
        lastName: 'Doerry',
        rating: '3/5',
        difficulty: '4.6/5',
        link: 'https://www.ratemyprofessors.com/professor/360620'
    },
    {
        firstName: 'Alex',
        lastName: 'Groce',
        rating: '3.1/5',
        difficulty: '3.3/5',
        link: 'https://www.ratemyprofessors.com/professor/2597553'
    },
    {
        firstName: 'Toby',
        lastName: 'Hocking',
        rating: '1.6/5',
        difficulty: '4/5',
        link: 'https://www.ratemyprofessors.com/professor/2663020'
    },
    {
        firstName: 'Patrick',
        lastName: 'Kelley',
        rating: '3/5',
        difficulty: '3.4/5',
        link: 'https://www.ratemyprofessors.com/professor/1736746'
    },
    {
        firstName: 'Mahsa',
        lastName: 'Keshavarz',
        rating: '4/5',
        difficulty: '3/5',
        link: 'https://www.ratemyprofessors.com/professor/2856498'
    },
    {
        firstName: 'Micheal',
        lastName: 'Leverington',
        rating: '2.8/5',
        difficulty: '4.8/5',
        link: 'https://www.ratemyprofessors.com/professor/2231281'
    },
    {
        firstName: 'Wolf-Dieter',
        lastName: 'Otte',
        rating: '3.4/5',
        difficulty: '3.2/5',
        link: 'https://www.ratemyprofessors.com/professor/2006465'
    },
    {
        firstName: 'James',
        lastName: 'Palmer',
        rating: '4.3/5',
        difficulty: '3/5',
        link: 'https://www.ratemyprofessors.com/professor/1515208'
    },
    {
        firstName: 'Volodymyr',
        lastName: 'Saruta',
        rating: '3.5/5',
        difficulty: '3.3/5',
        link: 'https://www.ratemyprofessors.com/professor/2461995'
    },
    {
        firstName: 'Isaac',
        lastName: 'Shaffer',
        rating: '2.8/5',
        difficulty: '3.1/5',
        link: 'https://www.ratemyprofessors.com/professor/2354355'
    },
    {
        firstName: 'Marc',
        lastName: 'Tollis',
        rating: '4.4/5',
        difficulty: '2.4/5',
        link: 'https://www.ratemyprofessors.com/professor/2903031'
    }]

    const courseData = [
        {
            Class: 'CS 105',
            Section: 1,
            Instructor: "Hocking,Toby D",
            A: 81,
            B: 42,
            C: 19,
            D: 15,
            F: 52,
            W: 37,
            Total: 247,
        },
        {
            Class: 'CS 386',
            Section: 1,
            Instructor: "Chaves Steinmacher,Ana P",
            A: 18,
            B: 13,
            C: 3,
            D: 0,
            F: 1,
            W: 1,
            Total: 36,
        }]
        
    

function Display()
{
    let Course = document.getElementById("Course").value;
    let Last = document.getElementById("Last").value;

    let ProfInfo = findProfessorByLastName(Last);
    let CourseInfo = findCourseName(Course);

    document.getElementById("output").innerHTML = "<br>Instructor Information: <br>Instructor: " + ProfInfo.firstName + " " + ProfInfo.lastName + "<br>Instructor's Rating: " + ProfInfo.rating + "<br>Instructor's Difficulty Rating: " + ProfInfo.difficulty + "<br><a href='" + ProfInfo.link + "'> Professor Reviews </a>";
    document.getElementById("output1").innerHTML = "<br>Course Information:<br>Percentage of Students who passed with a 'C' or Higher: " + findCourseAverage(CourseInfo) +"% .<br>" + "Percentage of Students who withdrew: " + findCourseWithdrawalRate(CourseInfo) + "% .<br>";

}

function findCourseAverage(CourseInformation){

    return (parseFloat((CourseInformation.A + CourseInformation.B + CourseInformation.C)/CourseInformation.Total).toFixed(2)*100);
}

function findCourseWithdrawalRate(CourseInformation){

    return (parseFloat(CourseInformation.W/CourseInformation.Total).toFixed(2)*100);
}

function findCourseName(CourseNameToFind) {
    for (let i = 0; i < courseData.length; i++) {
        if (courseData[i].Class === CourseNameToFind) {
            return courseData[i]; // Return the course object if found
        }
    }
    return null; // Return null if the course is not found
}


function findProfessorByLastName(lastNameNameToFind) {
    for (let i = 0; i < professors.length; i++) {
        if (professors[i].lastName === lastNameNameToFind) {
            return professors[i]; // Return the professor object if found
        }
    }
    return null; // Return null if the professor is not found
}