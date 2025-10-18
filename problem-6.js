/*
🧩 Problem : Roll Two Dice and Show the Total

Question:
Simulate rolling two dice. Generate two random numbers between 1 and 6, and return their sum.
*/

function rollDice() {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    console.log(dice1, dice2);
    return dice1 + dice2;
}

console.log(rollDice());