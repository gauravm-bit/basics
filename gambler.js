const readline = require('readline-sync');
let stake = readline.question("Enter the stake amount ");
let goal = readline.question("Enter the goal amount ");
let trails = readline.question("Enter the amount of trails ");
let win = 0; let bets = 0;

for (i = 0; i < trails; i++) {

    let cash = stake;
    while (cash > 0 && cash < goal) {
        bets++;
        let random = Math.random();
        if (random > 0.5) {
            cash++;
        }
        else {
            cash--;
        }
        if(cash == goal)
        win++;
        console.log(cash + "cash");
    }
}

let winPercent = (win/trails)*100;

console.log(bets);
console.log(`the amount of time the gambler won is ${win} times`);
console.log(`the winning percent is ${winPercent}%`);
 