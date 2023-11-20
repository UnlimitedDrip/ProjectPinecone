// Testing Instructor's information

const display = require('./Prototype.js');

const Array = display("CS 126", "Palmer")

test('Array comment 1 works', () => {
    expect(Array[0]).toEqual('One of few good CS instructors at NAU. Very flexible with due dates to accommodate the overall progress of the class on projects. He also makes plenty of time for questions if needed!');});  

test("Array comment 2 works", () => {
    expect(Array[1]).toEqual('He is the best Computer Science professor on the NAU campus. Come to class, he will answer questions and go in-depth on the equations and the projects themselves. He is the only professor who codes in front of the class and I personally learned more in his class than I did in any class. The projects are fun but difficult, START EARLY! ');});  

test("Everything in array works as expected", () => {
    expect(Array[2]).toEqual("Palmer is a great professor. He's really laid back and has a good personality. If you're interested in Computer Science, definitely take him. I withdrew from the class but only because it just wasn't my thing. But Palmer is awesome!");});  
    