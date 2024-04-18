const mongoose = require('mongoose'); 
const users = require('./models/Users');
const dotenv = require('dotenv');
const {makepassword} = require('./src/makepassword');
const util = require('./src/utility');
dotenv.config();

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.URI);
    console.log('Connected to MongoDB!');
}

makepassword('./password.txt', './password.enc.txt');

let usersData = util.readFile('./password.enc.txt');

console.log(usersData);

usersData.forEach((user) => {
    let [email, password] = user.split(':');
    let newUser = new users({
        email: email,
        password: password
    });
    newUser.save();
});