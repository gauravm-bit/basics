const readline = require('readline-sync');
let input = readline.question("Enter the value of n");
let harmonic = 1 

for(i = 2; i <= input; i++){
    harmonic += 1/i;
}
console.log(harmonic);
 
