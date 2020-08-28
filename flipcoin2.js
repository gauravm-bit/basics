const readline = require('readline-sync');
let input = readline.question("Enter the amount of times a coin is to be flipped?");
let heads = 0, tails = 0;

for (i = 0; i < input; i++)
{
    let random = Math.random();
    if (random < 0.5) {
        heads++;
    }
    else {
        tails++;
    }
}
 
let percentHeads = (heads*100)/input;
let percentTails = (tails*100)/input;

console.log(`the percentage of heads is ${percentHeads.toFixed()}%`)
console.log(`the percentage of tails is ${percentTails.toFixed()}%`)

