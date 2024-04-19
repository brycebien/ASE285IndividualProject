'use strict'
const fs = require('fs');
const util = require('./utility')

function passwordjs() {
    if (process.argv.length != 5) return 'false';

    var filename = process.argv[2]
    var email = process.argv[3]
    var password = process.argv[4]

    if (!fs.existsSync(filename)) {
        return false;
    } else {
        if (util.readFile(filename).includes(email + ':' + util.hash(password))) {
            return true;
        } else {
            return false;
        }
    }
}

if (require.main === module) {
    console.log(passwordjs())
}

module.exports = { passwordjs };