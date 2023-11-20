// Testing Instructor's information

const display = require('./Prototype.js');

test('Class information for instructor work', () => {
    expect(display("CS 122", "Shaffer").Instructor).toEqual('Tollis,Marc');});  

test("Class information for Total work", () => {
    expect(display("CS 126", "Saruta").Total).toEqual(74);});  

test("Class information work", () => {
    expect(display("CS 249", "Otte").W).toEqual(8);});  
    