DROP DATABASE IF EXISTS Pinecone;
-- create the database
CREATE DATABASE IF NOT EXISTS Pinecone;
-- select airline_db as the context
USE Pinecone;

-- create the table Pilot
CREATE TABLE InstructorInfo (
firstName varchar(100),
lastName varchar(100),
rating varchar(100),
difficulty varchar(100),
link varchar(200)
Comment1 varchar(500),
Comment2 varchar(500),
Comment3 varchar(500)
);

CREATE TABLE ClassData (
Class varchar(100),
Section int,
InstructorLast varchar(100),
InstructorFirst varchar(100),
A int,
B int,
C int,
D int,
F int,
W int,
Total int
);

INSERT INTO ClassData ( Class, Section , InstructorLast, InstructorFirst , A, B, C, D, F, W, Total) 
VALUES 
("CS 105", 1, "Hocking", "Toby", 81, 42, 19, 15, 52, 37, 247),
("CS 105", 2, "Hocking", "Toby", 2, 4, 1, 1, 1, 4, 13),
("CS 122", 1, "Bakke", "Paul", 73, 20, 8, 1, 8, 6, 116),
("CS 122", 2, "Tollis", "Marc", 49, 29, 12, 10, 13, 10, 123),
("CS 122L", 2, "Tollis", "Marc", 17, 1, 2, 4, 1, 3, 28),
("CS 122L", 3, "Tollis", "Marc", 21, 4, 3, 1, 0, 2, 31),
("CS 122L", 4, "Tollis", "Marc", 19, 5, 11, 2, 3, 0, 40),
("CS 122L", 5, "Tollis", "Marc", 7, 4, 5, 2, 4, 2, 24),
("CS 122L", 6, "Tollis", "Marc", 13, 8, 5, 5, 4, 1, 36),
("CS 122L", 7, "Tollis", "Marc", 8, 9, 4, 0, 11, 4, 36),
("CS 122L", 8, "Tollis", "Marc", 13, 9, 4, 0, 7, 4, 37),
("CS 126", 1, "Saruta", "Volodymyr", 17, 22, 16, 2, 9, 8, 74),
("CS 126", 2, "Saruta", "Volodymyr", 12, 15, 18, 5, 8, 10, 68),
("CS 126L", 1, "Saruta", "Volodymyr", 12, 5, 1, 0, 5, 3, 26),
("CS 126L", 2, "Saruta", "Volodymyr", 10, 7, 3, 1, 5, 3, 29),
("CS 126L", 3, "Saruta", "Volodymyr", 13, 2, 3, 1, 4, 3, 26),
("CS 126L", 4, "Saruta", "Volodymyr", 10, 5, 4, 3, 4, 3, 29),
("CS 126L", 5, "Saruta", "Volodymyr", 5, 2, 2, 3, 3, 4, 19),
("CS 136", 1, "Chaves", "Ana", 27, 20, 11, 2, 5, 1, 66),
("CS 136", 2, "Saruta", "Volodymyr", 25, 20, 10, 1, 7, 2, 65),
("CS 136L", 1, "Saruta", "Volodymyr", 28, 3, 0, 1, 1, 0, 33),
("CS 136L", 2, "Saruta", "Volodymyr", 31, 1, 1, 1, 0, 1, 35),
("CS 136L", 3, "Saruta", "Volodymyr", 29, 0, 0, 0, 0, 0, 29),
("CS 136L", 4, "Saruta", "Volodymyr", 23, 3, 0, 0, 0, 2, 28),
("CS 200", 1, "Kelley", "Patrick", 32, 14, 13, 5, 20, 17, 101),
("CS 205", 1, "Hocking", "Toby", 79, 28, 14, 11, 13, 13, 158),
("CS 212", 1, "Keshavarz", "Mahsa", 31, 16, 5, 4, 8, 6, 70),
("CS 249", 1, "Leverington", "Michael", 9, 24, 14, 12, 4, 8, 71),
("CS 305", 1, "Shaffer", "Isaac", 68, 23, 4, 4, 11, 3, 113),
("CS 312", 1, "Keshavarz", "Mahsa", 72, 10, 3, 1, 2, 2, 90),
("CS 315", 1, "Otte", "Wolf-Dieter", 8, 13, 7, 1, 3, 3, 35),
("CS 345", 1, "Chaves Steinmacher", "Ana", 8, 27, 10, 2, 5, 3, 55),
("CS 386", 1, "Chaves Steinmacher", "Ana", 18, 13, 3, 0, 1, 1, 36),
("CS 396", 1, "Steinmacher", "Igor", 29, 4, 1, 0, 1, 0, 35),
("CS 421", 1, "Otte", "Wolf-Dieter", 17, 19, 8, 3, 5, 1, 53),
("CS 460", 1, "Otte", "Wolf-Dieter", 11, 15, 6, 0, 3, 2, 37),
("CS 465", 1, "Otte", "Wolf-Dieter", 4, 6, 9, 0, 0, 4, 23),
("CS 470", 1, "Hocking", "Toby", 7, 4, 7, 1, 5, 2, 26),
("CS 476", 1, "Leverington", "Michael", 13, 4, 3, 0, 1, 0, 21),
("CS 480", 1, "Leverington", "Michael", 6, 8, 11, 3, 7, 6, 41),
("CS 486C", 1, "Leverington", "Michael", 42, 10, 4, 0, 0, 0, 56),
("CS 499", 2, "Kelley", "Patrick", 6, 7, 2, 0, 0, 3, 18),
("CS 499", 3, "Steinmacher", "Igor", 14, 0, 4, 0, 4, 3, 25);


INSERT INTO InstructorInfo (firstName, lastName, rating, difficulty, link, Comment1, Comment2, Comment3) 
VALUES 
("Micheal", "Leverington", '2.8/5', '4.8/5', 'https://www.ratemyprofessors.com/professor/2231281', "The review below is from Leverington lol. Anyone with an ounce of CS/industry knowledge knows he's a joke and you just have to put up with him.", "The bad reviews are from students not cut out for Computer Science. Michael drives you hard and expects you to fail, but he wants you to learn. His standards are very high, but for good reason. He will teach you to code right for your own good. You will suffer in his classes and you will become a better programmer because of it.", "Leverington does not even go in-depth of the differences between a kernel and an OS and enjoys slandering machines that are not Windows-based. Very opinionated prof with no track record backing up any of his nonsensical rants. Extremely out of touch with what happens in the real world, only knows the domains of his classes (not very well at all)"),
("Toby", "Hocking", '1.6/5', '4/5', "https://www.ratemyprofessors.com/professor/2663020", "This class doesn't even feel like it has a teacher or even sources to get help. He doesn't respond ever for anything. Terrible Terrible teacher.", "I took CS 105, 205, and 305 in the same semester with the same professor. Toby Hocking has NO contact with his students outside the emails he sends you. He DOES NOT ever respond to you via email or Slack. Your TAs and your fellow classmates are your teacher. Although, in CS 305 he started posting videos of his lectures and that was extremely helpful.", "This is a very poorly designed course taught by an uncaring professor."),
("Paul", "Bakke", "3.4/5", "2.5/5", "https://www.ratemyprofessors.com/professor/2678904", "Most of the stuff is going to be learned by doing the coding itself and his lectures are quite boring. You also don't know what grade you're actually going to get until near the end of the semester. I was thinking I ended the semester at a B- when I calculated it myself but ended with an A. If you put even 2 hours a week of effort you'll do fine.", "He was very nice but he stopped teaching about a month after school had started. I started to not understand what was going on in the class. Showing up felt like it was useless after that; he posted his lectures online and everything was online. The lab was horrible though, very hard.", "I felt like his lectures were there just to be there. Most of the learning is done on your own with the homework. He understands students are busy and provides very flexible hours which are very much appreciated. He is also always super helpful. The most unhelpful thing he's done was provide a required textbook. You will never touch it."),
("Marc", "Tollis", "4.4/5", "2.4/5", "https://www.ratemyprofessors.com/professor/2903031", "Prof Marc Tollis singlehandedly saved CS122 at NAU by being easy to understand and to follow. His expectations are clear and he is very forgiving. He answers lots of class questions and understands MATLAB well. Many topics are hard to grasp but he uses examples that make sense. Be prepared for the labs though, as the labs are fun but challenging.", "The lectures are a little elementary compared to the lab for this class. The final was super easy and helped me get an A. I stopped going to class after about 9 weeks and did not seem to miss much.", "I had Tollis for CS 122. Overall he was a great professor and showed that he was very passionate about his field of expertise. However, the class itself was very lecture-heavy, which got pretty stale halfway through. The class relies on lots of worksheets and weekly quizzes. The first exam is very easy but the second is very tough. Studying needed."),
("Volodymyr", "Saruta", "3.5/5", "3.3/5", "https://www.ratemyprofessors.com/professor/2461995", "Professor Saruta is a great person and an okay computer science professor. He is understanding of different skill levels and never made me feel stupid when I struggled. The content is difficult if you don't have coding experience and he tends to go on tangents during lectures, but the class is manageable if you utilize office hours and SI.", "Vova was a joy to have for a professor, I had him for 136 and he definitely shows care for his students and makes efforts to help whenever he is available. His grading can be confusing, but sticking to the GUR and following the rubric for projects is the key to success. I truly enjoyed having Vova as a teacher and highly recommend him.", "He just doesn't teach very well doesn't know the topic himself. His grading policies are stupid. You could have perfectly programmed something that gives the right output but still get a 50%."),
("Wolf-Dieter", "Otte", "3.4/5", "3.2/5", "https://www.ratemyprofessors.com/professor/2006465", "Challenging mostly because of the way Otte set up the class. Class was only held once a week and cut to an hour with a programming assignment, lab, and ~10-20 pg reading + notes due. PAs are done twice, write it in C & Java. I HIGHLY recommend not taking networks with Otte but Vigil-Hayes instead.", "Dr. Otte is awesome; it was his first semester teaching automata theory but he put in a lot of work to try and give us as good of an education as possible. This class is very hard and very theoretical, but you can tell he really wants the students to succeed. He's a great person and a great professor, and I would take him again. Study a lot though!", "Some of the material can get difficult if you are not familiar with web design and Microsoft Word. He is an all-or-nothing grader so be familiar with the schedule. Be prepared to pay $80 for Microsoft Word if you have an Apple computer."),
("Patrick", "Kelley", "3/5", "3.4/5", "https://www.ratemyprofessors.com/professor/1736746", "There's a lot of content that you are expected to know that isn't taught in either the lectures, the slides, or the textbook. Additionally, on the exams, there are tons of questions and not enough time to complete them all, let alone account for checking your work. Finally, the textbook used, Zybooks, is very unclear when working on the questions.", "Taking a class with him is like drinking from a fire hydrant. The lectures mostly go more in-depth than is needed, but they give good background. The real learning is the homework. If you can do the projects, you can pass the class. STUDY THE PROJECTS FOR THE TESTS!!! He will replicate skills from the projects on the exams. Class average was like a 65%", "If you have any background in CS at all, CYB126 is a breeze. It should not be a 4-credit class. I'm not sure how this is a cybersecurity class."),
("Ana", "Chaves", "2.9/5", "4.4/5", "https://www.ratemyprofessors.com/professor/2822538", "The last few reviews are written by Professor Chaves or a bot.", "Ana is a great person who is very kind and wants the best for her students. If you go to her office hours, she guides you through any problems. Though feedback lacks in the course, it's still passable with a decent grade if you look through notes and Google will be your best friend.", "Ana Chaves is a great professor. Heads up, she is an international professor and English isn't her first language, but she is fairly fluent in English so don't write her off yet. Ana is a tough grader but she outlines her grading rubric well and follows it. She doesn't accept late work so keep up. Overall, Ana is an awesome professor."),
("Mahsa", "Keshavarz", "4/5", "3/5", "https://www.ratemyprofessors.com/professor/2856498" "Horrible. She was absent for this entire course, it was carried by the TAs. She's very unaccommodating and relies on premade courses. She clearly does not care about the courses she teaches. Why is she even here?", "I had to take this class for my junior writing requirement and at first the bblearn page was very unorganized and it was hard to figure out what was going on. Slowly things started getting more organized. The assignments were pretty easy, just writing 2-5 pages every now and then + discussion posts. Ez class, I am glad it was online.", NULL),
("Issac", "Shaffer", "2.8/5", "3.1/5", "https://www.ratemyprofessors.com/professor/2354355" "He was super helpful for me when asking questions outside of class or during office hours, but his lectures were pointless to attend. He would cover a lot of the same things and focus on seemingly irrelevant examples. The exams were pretty easy, but the labs were difficult.", "If programming isn't your thing, just stay away. Otherwise, he's a very good introductory professor. You will do your exams on paper but this is a pretty standard practice in any programming class. Use his resources, he's happy to help you if you're struggling!", "Weird guy. Lectures weren't very beneficial. Labs were ahead of what we learned in lecture. Super easy tests. Easy class but I didn't learn much.");


