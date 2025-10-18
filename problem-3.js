/*
🧠 Problem 3: Roll a dice (1–6)
*/

function rollDice() {
    let random = Math.floor(Math.random() * 6) + 1;
    return random;
}

console.log(rollDice());