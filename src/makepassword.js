'use strict'
const fs = require('fs');
const {readFile, writeFile, hash} = require('./utility')

function makepassword(passwordFileName, passwordEncFileName) {
    let data = readFile(passwordFileName);

    let passwords = data.map(password => {
        return hash(password.split(':')[1]);
    });

    let emails = data.map(email => {
        return email.split(':')[0];
    });

    let combinedData = passwords.map((password, index) => {
        return emails[index] + ':' + password;
    });

    writeFile(combinedData, passwordEncFileName)
}

if (require.main === module) {
    makepassword('./password.txt', './password.enc.txt')
}

module.exports = { makepassword };