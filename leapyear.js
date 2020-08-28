const readline = require('readline-sync');
let input = readline.question("Enter the year to check it is leap or not ")

if (input % 400 == 0 || input % 4 == 0){
    console.log("It is a leap year");
}
else if(input % 100 == 0) {
    console.log("it is not a leap year");
}
 


