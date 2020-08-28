const readline = require('readline-sync');
let input = readline.question("Enter the value of n");

for(i = 2; i <= input/2; i++){
    if(input%i == 0){
        console.log( i)
    }
    }
 