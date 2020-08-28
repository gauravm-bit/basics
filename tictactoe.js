const prompt = require('prompt-sync')({ sigint: true });
let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
let computerMarker = '';
let playerMarker = '';
let count = 0;
let input = 0;

printBoard = () => {
    let divider = ' +-----------+';
    console.log(divider);
    for (i = 0; i < 9; i = i + 3) {
        console.log(' | ' + board[i] + ' | ' + board[i + 1] + ' | ' + board[i + 2] + ' | ');
        console.log(divider);
    }
}

winningConditions = () => {
    horizontalWin()
    verticalWin()
    diagonalWin()

}

horizontalWin = () => {
    for (i = 0; i < 9; i = i + 3) {
        if ((board[i] == 'X' && board[i + 1] == 'X' && board[i + 2] == 'X') ||
            (board[i] == 'O' && board[i + 1] == 'O' && board[i + 2] == 'O')) {
            console.log(`won horizontally`);
            process.exit()
        }
    }
}

verticalWin = () => {
    for (i = 0; i < 9; i = i + 1) {
        if ((board[i] == 'X' && board[i + 3] == 'X' && board[i + 6] == 'X') ||
            (board[i] == 'O' && board[i + 3] == 'O' && board[i + 6] == 'O')) {
            console.log(`won vertically`);
            process.exit()
        }
    }
}

diagonalWin = () => {
    if ((board[0] == 'X' && board[4] == 'X' && board[8] == 'X') ||
        ((board[0] == 'O' && board[4] == 'O' && board[8] == 'O'))
    ) {
        console.log(`won diagonally`);
        process.exit()
    }
    if ((board[2] == 'X' && board[4] == 'X' && board[6] == 'X') ||
        ((board[2] == 'O' && board[4] == 'O' && board[8] == 'O'))
    ) {
        console.log(`won diagonally`);
        process.exit()
    }
}

userTurn = () => {
    userInput();
    printBoard();
    winningConditions()
    computerTurn();
}

userInput = () => {
    input = prompt('Enter number where player wants to do the input : ');

    if (input > 0 && input <= 9) {

        if (checkEmpty(input)) {

            board[input - 1] = playerMarker;

            count++;
            drawCheck()
        }
        else {
            console.log('the position is already occupied');
            userTurn()
        }
        console.log('user' + count);
    }
    else {
        console.log('give proper input ');
        userTurn();
    }
}

checkEmpty = (input) => {
    if (board[input - 1] == ' ') {
        return true;
    }
}

computerTurn = () => {
    console.log(`computer has played his chance`);
    computerInput()
    printBoard();
    winningConditions()
    userTurn();
}

computerInput = () => {
    input = Math.floor((Math.random() * 9) + 1);
    console.log('cominp' + input);
    if (input > 0 && input <= 9) {
        if (checkEmpty(input)) {
            board[input - 1] = computerMarker;
            count++;
            drawCheck()
        }
        else {
            console.log(`already occupied computer plays again`);
            computerInput()
        }
        console.log('ucomp' + count);
    }
}

drawCheck = () => {
    if (count == 9) {
        console.log('the match has drawn');
        process.exit()
    }
}

toss = () => {
    let randomToss = Math.round(Math.random());
    if (randomToss == 1) {
        playerMarker = 'X';
        computerMarker = 'O';
        userTurn()
    } else {
        playerMarker = 'O';
        computerMarker = 'X';
        computerTurn()
    }
}
toss()




