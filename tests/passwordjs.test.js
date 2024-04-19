// Make tests when you have sub functions in this module.
// passwordjs() is tested by acceptance tests (acceptance.bat)
const p = require('../src/passwordjs');
const m = require('../src/makepassword');
const fs = require('fs');


describe('passwordjs', () => {
    test('passwordjs returns false when the number of arguments is not 5', () => {
        if(!fs.existsSync('passwordtest.enc.txt')) {
            m.makepassword('passwordtest.txt', 'passwordtest.enc.txt');
        }

        process.argv = ['node', 'passwordjs.js', 'passwordtest.enc.txt', 'email']
        expect(p.passwordjs()).toBe(false);
    });

    test('passwordjs returns false when the file does not exist', () => {
        if(fs.existsSync('passwordtest.enc.txt')) {
            fs.unlinkSync('passwordtest.enc.txt');
        }

        process.argv = ['node', 'passwordjs.js', 'passwordtest.enc.txt', 'email', 'password']

        expect(p.passwordjs()).toBe(false);
    });

    test('passwordjs returns false when the email and password do not match true when they do', () => {
        if(!fs.existsSync('passwordtest.enc.txt')) {
            m.makepassword('passwordtest.txt', 'passwordtest.enc.txt');
        }

        process.argv = ['node', 'passwordjs.js', 'passwordtest.enc.txt', 'email', 'password']

        expect(p.passwordjs()).toBe(false);

        process.argv = ['node', 'passwordjs.js', 'passwordtest.enc.txt', 'sm.cho@hello.com', '123456'];

        expect(p.passwordjs()).toBe(true);
    });
});
