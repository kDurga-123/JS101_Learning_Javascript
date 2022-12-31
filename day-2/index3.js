// Given stored username and password and input username and password, Print if the user can login or not.
let usename_of_database="durga@2002";
let password_of_database=123456789;


let usename_of_login="durga@2002";
let password_of_login=1234;
if (usename_of_database==usename_of_login) {
  if(password_of_database==password_of_login) {
    console.log("you can login")
  }
  else {
    console.log("you cannot login")
  }
  
}
