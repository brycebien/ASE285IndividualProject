// To unit-test the function that generates 'password.enc.txt', you should
//  make sure the unit test does the following check.
// 1. Make sure password.enc.txt does not exist before running the function.
// 2. Make sure password.enc.txt does exist after running the function.
// 3. Make sure the contents of password.enc.txt has correct contents.
// For unit tests, you don't have to have a large input in the beginning.
// Start with smallest input, and add more contents in the input

const exp = require('constants');
const p = require('../src/makepassword');
const u = require('../src/utility');
const fs = require('fs');

/*
// Let's say you have a toHash() function in this module
*/

// test('Check toHash(): if the email:password is converted into email:hashPassword', () => {
//     const input = './tests/passwordtest.txt'
//     const output = './tests/passwordtest.enc.txt'
//     p.makepassword(input, output)
//     data = u.readFile(output)
//     expect(data.split(':')[1]).toBe(output.split(':')[1]);
// });

describe("makepassword should create file", () => {
    test('',() => {
        const fileName = './tests/passwordtest.txt'
        const encFileName = './tests/passwordtest.enc.txt'

        // 1. Make sure password.enc.txt does not exist before running the function.
        if(fs.existsSync(encFileName)) {
            fs.unlinkSync(encFileName)
        }
        
        p.makepassword(fileName, encFileName)

        // 2. Make sure password.enc.txt does exist after running the function.
        expect(fs.existsSync(encFileName)).toBe(true);

        // 3. Make sure the contents of password.enc.txt has correct contents.
        const data = u.readFile(encFileName)
        expect(data.length).toBe(1)
        expect(data[0]).toContain('sm.cho@hello.com')
    })
})