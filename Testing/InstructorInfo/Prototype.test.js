// Testing Instructor's information

const display = require('./Prototype.js');

test('Professor First Name works', () => {
    expect(display("CS 122", "Shaffer").firstName).toEqual('Isaac');});  

test("Instructor's difficulty works", () => {
    expect(display("CS 122", "Saruta").difficulty).toEqual('3.3/5');});  

test("Instructor's work as expected", () => {
    expect(display("CS 122", "Otte").link).toEqual('https://www.ratemyprofessors.com/professor/2006465');});  
    