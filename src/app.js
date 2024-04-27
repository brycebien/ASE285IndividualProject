'use strict'
const mongoose = require('mongoose'); 
const users = require('../models/Users');
const dotenv = require('dotenv');
const util = require('./utility')
dotenv.config();

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.URI);
}

async function passwordjs() {
    if (process.argv.length != 4) return false;

    var email = process.argv[2]
    var password = process.argv[3]

    var user = await users.findOne({email: email})
    if(user == null) {
        console.log('false')
    } else if (user.password == util.hash(password) && user.email == email) {
        console.log('true')
    } else {
        console.log('false')
    }
    mongoose.connection.close()
}

if (require.main === module) {
    passwordjs()
}

module.exports = { passwordjs };