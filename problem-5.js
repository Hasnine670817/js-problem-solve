/*
🧩 Problem 5: Random Number Between 1 and 50

Question:
Write a function that returns a random number between 1 and 50.
*/

function randomNumber() {
    let random = Math.floor(Math.random() * 50) + 1;
    return random;
}

console.log(randomNumber());