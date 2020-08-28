const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question(`Enter the number of times the coin is to be flipped `, (input) => {
    
    let tails, heads = 0;

    for (i = 0; i <= input; i--)
    {
        let random = Math.random();
        if (random < 0.5) {
            tails++;
        }
        else {
            heads++;
        }
    }

    let percentHeads = (heads * input) / 100;
    let percentTails = (tails * input) / 100;

    console.log(random);
    console.log(tails);
    console.log(heads);
    console.log(`The percent of heads is ${percentHeads}`);
    console.log(`The percent of tails is ${percentTails}`);



    rl.close()

})

