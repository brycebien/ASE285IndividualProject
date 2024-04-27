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
    if (process.argv.length != 4){
        mongoose.connection.close();
        return false;
    }

    var email = process.argv[2];
    var password = process.argv[3];

    var user = await users.findOne({email: email})
    if(user == null) {
        mongoose.connection.close();
        return false;
    } else if (user.password == util.hash(password) && user.email == email) {
        mongoose.connection.close();
        return true;
    } else {
        mongoose.connection.close();
        return false;
    }
}

if (require.main === module) {
    (async () => {
        console.log(await passwordjs())
    })();
}

module.exports = { passwordjs };