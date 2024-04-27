const mongoose = require('mongoose'); 
const users = require('../models/Users');
const dotenv = require('dotenv');
const util = require('../src/utility');
dotenv.config();

(async () => {
    await mongoose.connect(process.env.URI);
})();

describe("should store users in database", () => {
    
    it('Stores users in database with encrypted passwords',async () => {
        let usersData = util.readFile('./password.enc.txt');
    
        usersData.forEach((user) => {
            let [email, password] = user.split(':');
            let newUser = new users({
                email: email,
                password: password
            });
            newUser.save();
        });

        let user = await users.find({});
        expect(user.length).not.toBe(0);
    });
    
    afterAll(async () => {
        await mongoose.connection.close();
    });
});