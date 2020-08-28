const readline  = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})

rl.on('line',(input)=>{
    if(input.length == 3)
    {
    console.log(`Username is ${input}`);
    }
    else{
        console.log(`username should be more than 3 letters`)
    }
})

