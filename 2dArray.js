const readline = require('readline-sync');
let rows = readline.question("Enter the number of rows ");
let columns = readline.question("Enter the number of columns ");
let arr = [];

for (i = 0; i < rows; i++) {
    arr[i] = []
    for (j = 0; j < columns; j++) {
        let element = readline.question("Enter the element ");
        arr[i].push(element)
    }
}
console.log(arr);