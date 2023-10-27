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

function Display()
{
    let Course = document.getElementById("Course").value;
    let Last = document.getElementById("Last").value;

    let ProfInfo = findProfessorByLastName(Last);

    document.getElementById("output").innerHTML = "<br>Instructor" + ProfInfo.firstName + " " + ProfInfo.lastName +"<br>Instructor's rating: " + ProfInfo.rating + "<br>Instructor's difficulty: " + ProfInfo.difficulty +  "<br><a href=" + ProfInfo.link + "> Proffesor's page</a>";






}

function findProfessorByLastName(lastNameNameToFind) {
    for (let i = 0; i < professors.length; i++) {
        if (professors[i].lastName === lastNameNameToFind) {
            return professors[i]; // Return the professor object if found
        }
    }
    return null; // Return null if the professor is not found
}