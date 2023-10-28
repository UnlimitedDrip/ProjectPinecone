const display = require('./Prototype');

test('Professor First Name works', () => 
{expect(display("CS 105", "Hocking").firstName).toEqual('Toby');});

test('Professor Rating works', () => 
{expect(display("CS 105", "Otte").rating).toEqual('3.4/5');});

test('Professor difficulty works', () => 
{expect(display("CS 105", "Leverington").difficulty).toEqual('4.8/5');});


