const professors = [
    {
        firstName: 'Ashish',
        lastName: 'Amresh',
        rating: '2.6/5',
        difficulty: '1.9/5',
        link: 'https://www.ratemyprofessors.com/professor/1356382',
        comment1: "Overall he didn't do anything during the semester so far other than use other professor's material to 'teach' the course. Be prepared to figure everything out on your own. The videos he uses are generic, outdated, and most likely won't pertain to the OS you are running.",
        comment2: "Barely taught. Just gave specific lessons from book. Cares more about research than teaching.",
        comment3: "The video lectures are pretty good quality, the instructor in the videos is well qualified and speaks clearly. the coursework is moderate but not very difficult. Amresh was very responsive and I generally found this to be one of the better parts of the BSE program at ASU."
    },
    {
        firstName: 'Paul',
        lastName: 'Bakke',
        rating: '3.4/5',
        difficulty: '2.5/5',
        link: 'https://www.ratemyprofessors.com/professor/2678904',
        comment1: "Most of the stuff is going to be learned by doing the coding itself and his lectures are quite boring. You also don't know what grade you're actually going to get until near the end of the semester. I was thinking I ended the semester at a B- when I calculated it myself but ended with an A. If you put even 2 hours a week of effort you'll do fine.",
        comment2: "He was very nice but he stopped teaching about a month after school had started. I started to not understand what was going on in the class. Showing up felt like it was useless after that; he posted his lectures online and everything was online. The lab was horrible though, very hard.",
        comment3: "I felt like his lectures were there just to be there. Most of the learning is done on your own with the homework. He understands students are busy and provides very flexible hours which are very much appreciated. He is also always super helpful. The most unhelpful thing he's done was provide a required textbook. You will never touch it."
    },
    {
        firstName: 'Ana',
        lastName: 'Chaves',
        rating: '2.9/5',
        difficulty: '4.4/5',
        link: 'https://www.ratemyprofessors.com/professor/2822538',
        comment1: "The last few reviews are written by Professor Chaves or a bot.",
        comment2: "Ana is a great person who is very kind and wants the best for her students. If you go to her office hours, she guides you through any problems. Though feedback lacks in the course, it's still passable with a decent grade if you look through notes and Google will be your best friend.",
        comment3: "Ana Chaves is a great professor. Heads up, she is an international professor and English isn't her first language, but she is fairly fluent in English so don't write her off yet. Ana is a tough grader but she outlines her grading rubric well and follows it. She doesn't accept late work so keep up. Overall, Ana is an awesome professor."
    },
    {
        firstName: 'Eck', 
        lastName: 'Doerry',
        rating: '3/5',
        difficulty: '4.6/5',
        link: 'https://www.ratemyprofessors.com/professor/360620',
        comment1: "A great professor. Respectful, very knowledgeable, and friendly. He has high expectations, but as long as you work to meet those expectations, you will be fine.",
        comment2: "Dr. D is a tough professor and can be intimidating. However, stay confident and show you are a hard-working, dedicated student and you will appreciate him as a teacher. His lectures are fast-paced and absolutely necessary! The tests are hard but doable if you commit to understanding the material.",
        comment3: "I like his lectures and thinks he teaches his subjects well. However he is very harsh. 'There are no dumb questions' is not a concept doerry understands. He will laugh in your face. However if you stay firm and not get bothered by his rudeness, he will answer your question and will answer it well. However, no song and dance should be required."
    },
    {
        firstName: 'Alex',
        lastName: 'Groce',
        rating: '3.1/5',
        difficulty: '3.3/5',
        link: 'https://www.ratemyprofessors.com/professor/2597553',
        comment1: "Completed Cybersecurity capstone project with professor Groce. He was open to me completing the project on any relevant topic I was interested in. Project ended up being around 35 pages for my report. Easy no hassle A for the work I put in",
        comment2: "This class is very theory heavy and difficult to grasp. we are only given exams (only thing in the gradebook) making it harder to improve your grade. ",
        comment3: "Very knowledgable professor and has a track record to prove it. For this class it was a lot of online videos and discussions but Im hoping his in person classes can offer more. If he is the instructor, take the course!"
    },
    {
        firstName: 'Toby',
        lastName: 'Hocking',
        rating: '1.6/5',
        difficulty: '4/5',
        link: 'https://www.ratemyprofessors.com/professor/2663020',
        comment1: "This class doesn't even feel like it has a teacher or even sources to get help. He doesn't respond ever for anything. Terrible Terrible teacher. " ,
        comment2: "I took CS 105,205,and305 in the same semester with the same professor. Toby Hocking has NO contact with his students outside the emails he sends you. He DOES NOT ever respond to you via email or Slack. Your TAs and your fellow classmates are your teacher. Although, in CS 305 he started posting videos of his lectures and that was extremely helpful.",
        comment3: "This is a very poorly designed course taught by an uncaring professor."
    },
    {
        firstName: 'Patrick',
        lastName: 'Kelley',
        rating: '3/5',
        difficulty: '3.4/5',
        link: 'https://www.ratemyprofessors.com/professor/1736746',
        comment1: "There's a lot of content that you are expected to know that isn't taught in either the lectures, the slides, or the textbook. Additionally, on the exams, there are tons of questions and not enough time to complete them all, let alone account for checking your work. Finally, the textbook used, Zybooks, is very unclear when working on the questions.",
        comment2: "Taking a class with him is like drinking from a fire hydrant. The lectures mostly go more in-depth than is needed, but they give good background. The real learning is the homework. If you can do the projects, you can pass the class. STUDY THE PROJECTS FOR THE TESTS!!! He will replicate skills from the projects on the exams. Clas avg was like a 65%",
        comment3: "If you have any background in CS at all, CYB126 is a breeze. It should not be a 4 credit class. I'm not sure how this is a cybersecurity class."
    },
    {
        firstName: 'Mahsa',
        lastName: 'Keshavarz',
        rating: '4/5',
        difficulty: '3/5',
        link: 'https://www.ratemyprofessors.com/professor/2856498',
        comment1: "Horrible. She was absent for this entire course, it was carried by the TA's. She's very unaccommodating and relies on premade courses. She clearly does not care about the courses she teaches. Why is she even here? ",
        comment2: "I had to take this class for my junior writing requirement and at first the bblearn page was very unorganized and it was hard to figure out what was going on. Slowly things started getting more organized. The assignments were pretty easy, just writing 2-5 pages every now and then + discussion posts. Ez class, I am glad it was online.",
        comment3: "N/A"
    },
    {
        firstName: 'Micheal',
        lastName: 'Leverington',
        rating: '2.8/5',
        difficulty: '4.8/5',
        link: 'https://www.ratemyprofessors.com/professor/2231281',
        comment1: "The review below is from Leverington lol. Anyone with an ounce of CS/industry knowledge knows he's a joke and you just have to put up with him.",
        comment2: "The bad reviews are from students not cut out for Computer Science. Michael drives you hard and expects you to fail, but he wants you to learn. His standards are very high, but for good reason. He will teach you to code right for your own good. You will suffer in his classes and you will become a better programmer because of it.",
        comment3: "Leverington does not even go in-depth of the differences between a kernel and an OS and enjoys slandering machines that are not Windows-based. Very opinionated prof with no track record backing up any of his nonsensical rants. Extremely out of touch with what happens in the real world, only knows the domains of his classes (not very well at all)"
    },
    {
        firstName: 'Wolf-Dieter',
        lastName: 'Otte',
        rating: '3.4/5',
        difficulty: '3.2/5',
        link: 'https://www.ratemyprofessors.com/professor/2006465',
        comment1: "Challenging mostly because of the way Otte set up the class. Class was only held once a week and cut to an hour with a programming assignment, lab, and ~10-20 pg reading + notes due. PAs are done twice, write it in C & Java. I HIGHLY recommend not taking networks with Otte but Vigil-Hayes instead.",
        comment2: "Dr. Otte is awesome; it was his first semester teaching automata theory but he put in a lot of work to try and give us as good of an education as possible. This class is very hard and very theoretical, but you can tell he really wants the students to succeed. He's a great person and a great professor, and I would take him again. Study a lot though!",
        comment3: "Some of the material can get difficult if you are not familiar with web design and Microsoft Word. He is an all-or-nothing grader so be familiar with the schedule. Be prepared to pay $80 for Microsoft Word if you have an Apple computer."
    },
    {
        firstName: 'James',
        lastName: 'Palmer',
        rating: '4.3/5',
        difficulty: '3/5',
        link: 'https://www.ratemyprofessors.com/professor/1515208',
        comment1: 'One of few good CS instructors at NAU. Very flexible with due dates to accommodate the overall progress of the class on projects. He also makes plenty of time for questions if needed!',
        comment2: "He is the best Computer Science professor on the NAU campus. Come to class, he will answer questions and go in-depth on the equations and the projects themselves. He is the only professor who codes in front of the class and I personally learned more in his class than I did in any class. The projects are fun but difficult, START EARLY! ",
        comment3: "Palmer is a great professor. He's really laid back and has a good personality. If you're interested in Computer Science, definitely take him. I withdrew from the class but only because it just wasn't my thing. But Palmer is awesome!"
    },
    {
        firstName: 'Volodymyr',
        lastName: 'Saruta',
        rating: '3.5/5',
        difficulty: '3.3/5',
        link: 'https://www.ratemyprofessors.com/professor/2461995',
        comment1: "Professor Saruta is a great person and an okay computer science professor. He is understanding of different skill levels and never made me feel stupid when I struggled. The content is difficult if you don't have coding experience and he tends to go on tangents during lectures, but the class is manageable if you utilize office hours and SI.",
        comment2: "Vova was a joy to have for a professor, I had him for 136 and he definitely shows care for his students and makes efforts to help whenever he is available. His grading can be confusing, but sticking to the GUR and following the rubric for projects is the key to success. I truly enjoyed having Vova as a teacher and highly recommend him.",
        comment3: "He just doesn't teach very well doesn't know the topic himself. His grading policies are stupid. You could have perfectly programmed something that gives the right output but still get a 50%."
    },
    {
        firstName: 'Isaac',
        lastName: 'Shaffer',
        rating: '2.8/5',
        difficulty: '3.1/5',
        link: 'https://www.ratemyprofessors.com/professor/2354355',
        comment1: "He was super helpful for me when asking questions outside of class or during office hours, but his lectures were pointless to attend. He would cover a lot of the same things and focus on seemingly irrelevant examples. The exams were pretty easy, but the labs were difficult.",
        comment2: "If programming isn't your thing, just stay away. Otherwise, he's a very good introductory professor. You will do your exams on paper but this is a pretty standard practice in any programming class. Use his resources, he's happy to help you if you're struggling!",
        comment3: "Weird guy. Lectures weren't very beneficial. Labs were ahead of what we learned in lecture. Super easy tests. Easy class but I didn't learn much."
    },
    {
        firstName: 'Igor',
        lastName: 'Steinmacher',
        rating: 'N/A',
        difficulty: 'N/A',
        link: 'N/A',
        comment1: 'N/A',
        comment2: 'N/A',
        comment3: 'N/A'
    },
    {
        firstName: 'Marc',
        lastName: 'Tollis',
        rating: '4.4/5',
        difficulty: '2.4/5',
        link: 'https://www.ratemyprofessors.com/professor/2903031',
        comment1: "Prof Marc Tollis singlehandedly saved CS122 at NAU by being easy to understand and to follow. His expectations are clear and he is very forgiving. He answers lots of class questions and understands MATLAB well. Many topics are hard to grasp but he uses examples that make sense. Be prepared for the labs though, as the labs are fun but challenging.",
        comment2: "The lectures are a little elementary compared to the lab for this class. The final was super easy and helped me get an A. I stopped going to class after about 9 weeks and did not seem to miss much.",
        comment3: "I had Tollis for CS 122. Overall he was a great professor and showed that he was very passionate about his field of expertise. However, the class itself was very lecture-heavy, which got pretty stale halfway through. The class relies on lots of worksheets and weekly quizzes. The first exam is very easy but the second is very tough. Studying needed."
    }]

    const courseData = [
    
    {
        "Class": "CS 105",
        "Section": 1,
        "Instructor": "Hocking,Toby D",
        "A": 81,
        "B": 42,
        "C": 19,
        "D": 15,
        "F": 52,
        "W": 37,
        "Total": 247
    },
    {
        "Class": "CS 122",
        "Section": 2,
        "Instructor": "Tollis,Marc",
        "A": 49,
        "B": 29,
        "C": 12,
        "D": 10,
        "F": 13,
        "W": 10,
        "Total": 123
    },
    {
        "Class": "CS 122L",
        "Section": 4,
        "Instructor": "Tollis,Marc",
        "A": 19,
        "B": 5,
        "C": 11,
        "D": 2,
        "F": 3,
        "W": 0,
        "Total": 40
    },
    {
        "Class": "CS 126",
        "Section": 1,
        "Instructor": "Saruta,Volodymyr Vasylyovych",
        "A": 17,
        "B": 22,
        "C": 16,
        "D": 2,
        "F": 9,
        "W": 8,
        "Total": 74
    },
    {
        "Class": "CS 126L",
        "Section": 1,
        "Instructor": "Saruta,Volodymyr Vasylyovych",
        "A": 12,
        "B": 5,
        "C": 1,
        "D": 0,
        "F": 5,
        "W": 3,
        "Total": 26
    },
    {
        "Class": "CS 126L",
        "Section": 2,
        "Instructor": "Saruta,Volodymyr Vasylyovych",
        "A": 10,
        "B": 7,
        "C": 3,
        "D": 1,
        "F": 5,
        "W": 3,
        "Total": 29
    },
    {
        "Class": "CS 136",
        "Section": 1,
        "Instructor": "Chaves Steinmacher,Ana P",
        "A": 27,
        "B": 20,
        "C": 11,
        "D": 2,
        "F": 5,
        "W": 1,
        "Total": 66
    },
    {
    "Class": "CS 136L",
    "Section": 2,
    "Instructor": "Saruta,Volodymyr Vasylyovych",
    "A": 31,
    "B": 1,
    "C": 1,
    "D": 1,
    "F": 0,
    "W": 1,
    "Total": 35
    },
    {
    "Class": "CS 200",
    "Section": 1,
    "Instructor": "Kelley,Patrick Edward",
    "A": 32,
    "B": 14,
    "C": 13,
    "D": 5,
    "F": 20,
    "W": 17,
    "Total": 101
    },
    {
    "Class": "CS 205",
    "Section": 1,
    "Instructor": "Hocking,Toby D",
    "A": 79,
    "B": 28,
    "C": 14,
    "D": 11,
    "F": 13,
    "W": 13,
    "Total": 158
    },
    {
    "Class": "CS 212",
    "Section": 1,
    "Instructor": "Keshavarz,Mahsa",
    "A": 31,
    "B": 16,
    "C": 5,
    "D": 4,
    "F": 8,
    "W": 6,
    "Total": 70
    },
    {
    "Class": "CS 249",
    "Section": 1,
    "Instructor": "Leverington,Michael E",
    "A": 9,
    "B": 24,
    "C": 14,
    "D": 12,
    "F": 4,
    "W": 8,
    "Total": 71
    },
    {
    "Class": "CS 305",
    "Section": 1,
    "Instructor": "Shaffer,Isaac Newton/Hocking,Toby D",
    "A": 68,
    "B": 23,
    "C": 4,
    "D": 4,
    "F": 11,
    "W": 3,
    "Total": 113
    },
    {
    "Class": "CS 312",
    "Section": 1,
    "Instructor": "Keshavarz,Mahsa",
    "A": 72,
    "B": 10,
    "C": 3,
    "D": 1,
    "F": 2,
    "W": 2,
    "Total": 90
    },
    {
    "Class": "CS 315",
    "Section": 1,
    "Instructor": "Otte,Wolf-Dieter Wilhelm",
    "A": 8,
    "B": 13,
    "C": 7,
    "D": 1,
    "F": 3,
    "W": 3,
    "Total": 35
    },
    {
    "Class": "CS 345",
    "Section": 1,
    "Instructor": "Chaves Steinmacher,Ana P",
    "A": 8,
    "B": 27,
    "C": 10,
    "D": 2,
    "F": 5,
    "W": 3,
    "Total": 55
    },
    {
    "Class": "CS 386",
    "Section": 1,
    "Instructor": "Chaves Steinmacher,Ana P",
    "A": 18,
    "B": 13,
    "C": 3,
    "D": 0,
    "F": 1,
    "W": 1,
    "Total": 36
    },
    {
    "Class": "CS 396",
    "Section": 1,
    "Instructor": "Steinmacher,Igor F/Kalburgi,Goutamkumar Tulajappa",
    "A": 29,
    "B": 4,
    "C": 1,
    "D": 0,
    "F": 1,
    "W": 0,
    "Total": 35
    },
    {
    "Class": "CS 421",
    "Section": 1,
    "Instructor": "Otte,Wolf-Dieter Wilhelm",
    "A": 17,
    "B": 19,
    "C": 8,
    "D": 3,
    "F": 5,
    "W": 1,
    "Total": 53
    },
    {
    "Class": "CS 460",
    "Section": 1,
    "Instructor": "Otte,Wolf-Dieter Wilhelm",
    "A": 11,
    "B": 15,
    "C": 6,
    "D": 0,
    "F": 3,
    "W": 2,
    "Total": 37
    },
    {
    "Class": "CS 465",
    "Section": 1,
    "Instructor": "Otte,Wolf-Dieter Wilhelm",
    "A": 4,
    "B": 6,
    "C": 9,
    "D": 0,
    "F": 0,
    "W": 4,
    "Total": 23
    },
    {
    "Class": "CS 470",
    "Section": 1,
    "Instructor": "Hocking,Toby D",
    "A": 7,
    "B": 4,
    "C": 7,
    "D": 1,
    "F": 5,
    "W": 2,
    "Total": 26
    },
    {
    "Class": "CS 476",
    "Section": 1,
    "Instructor": "Leverington,Michael E/Kramer,Daniel R",
    "A": 13,
    "B": 4,
    "C": 3,
    "D": 0,
    "F": 1,
    "W": 0,
    "Total": 21
    },
    {
    "Class": "CS 480",
    "Section": 1,
    "Instructor": "Leverington,Michael E",
    "A": 6,
    "B": 8,
    "C": 11,
    "D": 3,
    "F": 7,
    "W": 6,
    "Total": 41
    },
    {
    "Class": "CS 486C",
    "Section": 1,
    "Instructor": "Leverington,Michael E",
    "A": 42,
    "B": 10,
    "C": 4,
    "D": 0,
    "F": 0,
    "W": 0,
    "Total": 56
    },
    {
    "Class": "CS 499",
    "Section": 2,
    "Instructor": "Kelley,Patrick Edward",
    "A": 6,
    "B": 7,
    "C": 2,
    "D": 0,
    "F": 0,
    "W": 3,
    "Total": 18
    },
    {
    "Class": "CS 499",
    "Section": 3,
    "Instructor": "Steinmacher,Igor F",
    "A": 14,
    "B": 0,
    "C": 4,
    "D": 0,
    "F": 4,
    "W": 3,
    "Total": 25
    }
]
        
    

function Display()
{
    //array for comments
    var commArr = new Array(2);

    let Course = document.getElementById("Course").value;
    let Last = document.getElementById("Last").value;

    let ProfInfo = findProfessorByLastName(Last);
    let CourseInfo = findCourseName(Course);

    //get comments
    commArr = getProfComments(ProfInfo, commArr);

    document.getElementById("output").innerHTML = "<br>Instructor Information: <br>Instructor: " + ProfInfo.firstName + " " + ProfInfo.lastName + "<br>Instructor's Rating: " + ProfInfo.rating + "<br>Instructor's Difficulty Rating: " + ProfInfo.difficulty + "<br><a href='" + ProfInfo.link + "'> Professor Reviews </a>"
                                                   +"<br>Professor's Top 3 Most Recent Comments: <br>" + "<br>Comment 1: " + commArr[0] + "<br><br>Comment 2: "+ commArr[1] + "<br><br> Comment 3: "+ commArr[2] +"<br>";
    document.getElementById("output1").innerHTML = "<br>Course Information:<br>Percentage of Students who passed with a 'C' or Higher: " + findCourseAverage(CourseInfo) +"% .<br>" + "Percentage of Students who withdrew: " + findCourseWithdrawalRate(CourseInfo) + "% .<br>"
                                                    + "<br> Course Difficulty: "+findCourseDiff(CourseInfo) + " <br>";

}



function getProfComments(ProfInfo, commArr){
    commArr[0] = ProfInfo.comment1;
    commArr[1] = ProfInfo.comment2;
    commArr[2] = ProfInfo.comment3;

    return commArr;
}



function findCourseDiff(CourseInfo){

    let WithdrawalRate = findCourseWithdrawalRate(CourseInfo);
    let CourseAvg = findCourseAverage(CourseInfo);

    //find out if class is hard based on course avg
    if(CourseAvg < 70.00 || WithdrawalRate > 33.00){
        return "According to the Course Average or the Withdrawal Rate this course may be a bit difficult";
    } 
    return "This course seems to not have any indications that it will be abnormally difficult";
}

function findCourseAverage(CourseInformation){

    return ((parseFloat((CourseInformation.A + CourseInformation.B + CourseInformation.C)/CourseInformation.Total)*100).toFixed(2));
}

function findCourseWithdrawalRate(CourseInformation){

    return ((parseFloat(CourseInformation.W/CourseInformation.Total)*100).toFixed(2));
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