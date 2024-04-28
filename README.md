# ASE 285 Individual Project

## Storing Users in Database

* Create *password.txt* with usernames and passwords in username:password format
* Run *node index.js* to store usernames and passwords in database securely

## Running Application

* Run *node src/app.js \<username\> \<password\>*
  * This will return true if the credentials are correct and false if they are incorrect

## Running Application without database

* Run *node src/passwordjs.js \<filename\> \<username\> \<password\>* to query usernames from encrypted file made from *index.js*
  * this will return true if the credentials are correct and false if they are incorrect
