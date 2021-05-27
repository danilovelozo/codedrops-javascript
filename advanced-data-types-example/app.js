let board = [
  [null, null, "s"]
  ["s", null, null]
  [null, "s", null]
];

let firstRow = board[0]
let secondRow = board[1]
let thirdRow = board[2]

console.log(`The Board contains ${firstRow}, ${secondRow} and ${thirdRow}`)

console.log(`first ship is board[1][2]`)
// using the second brackets is how you access the columns in the row you identify

// "firstRow1" is accesing the first element in the first array


//----------------------------------------------//


for (let i = 0, i < board.length; i++) {
  // a single row
  let row = board[i];
  // loop over each element
  for(let = j, j < row.length; j++) {
    let column = row[j];

    if (column === "s") {
      console.log(`Ship is located at ${row} row and ${column} column`);
    }
    // i used "i" and "j" to assign coordinates when the ship is located
  }
}

//----------------------------------------------//

// To create turns i will create a loop that iterates 10 times
for(let i = 0; i < 10; i++){}


// Randon Index, in order to choose a random square we can use the Math.random function:
for(let i = 0; i < 10; i++){}

function getRandomNum(){
  return Math.floor(Math.random() * board.length);
  // using "board.length creates the max number the generator can use
}
// Math.random will return a random number between 0 and 1 so we use" * 5 " to make it a whole number we can use
console.log(getRandomNum());
console.log(getRandomNum());
console.log(getRandomNum());
console.log(getRandomNum());

//----------------------------------------------//


// Using the same Math.random function, i will create code that displays a certain square's coordinates:

for(let i = 0; i < 10; i++()){
  let row = getRandomNum();
  let column = getRandomNum();
  console.log(`The box can be found at ${} row and ${} column`);
  let randomSquare = board[row][column];
  console.log(randomSquare);}
  function getRandomNum(){
  return Math.floor(Math.random() * 5)
  }

  //----------------------------------------------//

  // If you land a hit, that square will become null or an empty square

for (var i = 0; i < 10; i++) {
  var row = getRandomNum();
  var column = getRandomNum();

  var randomSquare = board[row][column];

  if (randomSquare === "S") {
    console.log(`Hit on ${row} row and ${column} column`);
    board[row][column] = null;
  }
}

function getRandomNum() {
  return Math.floor(Math.random() * 5);
}