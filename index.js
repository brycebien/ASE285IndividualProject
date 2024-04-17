const mongoose = require('mongoose'); 
const users = require('./models/Users');
const dotenv = require('dotenv');
dotenv.config();

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.URI);
    console.log('Connected to MongoDB!');
}

const user = new users({
    email: 'testing',
    password: 'password'
});

(async () => {
    await user.save();
    console.log('User has been saved!');
    await mongoose.connection.close();
})();