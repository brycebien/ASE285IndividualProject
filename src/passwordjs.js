'use strict'
const fs = require('fs');
const util = require('./utility')

function passwordjs() {
    if (process.argv.length != 5) return 'false';

    var filename = process.argv[2]
    var email = process.argv[3]
    var password = process.argv[4]

    ???
}

if (require.main === module) {
    console.log(passwordjs()) // print out true or false
}

module.exports = {???};