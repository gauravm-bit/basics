const prompt = require('prompt-sync')({ sigint: true });
let board = ['x', '', '', 'y']

console.log(board);

inputGive = () => {
    let input = prompt('enter the input for string: ') 
        if(checkEmpty(input)) {
            board[input - 1] = 'o';
        }
        else
        {
            console.log('the cell is already occupied : ');
            inputGive()

        }          
}

checkEmpty = (input) => {
    if (board[input - 1] == '') {
        return true;
    }
}

inputGive()
console.log(board);
 


// input = () => {

//      let n = prompt('How many more times? ');

//         if(n > 10){
//             console.log(`input is correct `);
//         }
//         else{
//             console.log(`input again `);
//             input();
//         }


//     }
// input()

