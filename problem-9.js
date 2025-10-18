/*
🧩 Problem 9: Generate a Random Even Number Between 10 and 30

Question:
Write a function that generates a random even number between 10 and 30.

Hint:
1️⃣ Generate a random number between 10 and 30
2️⃣ Check if it’s even — if not, generate again
*/

function randomEvenNumber() {
    let randomNumber;

    while (true) {
        randomNumber = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
        if (randomNumber % 2 === 0) {
            return randomNumber;
        }
    }
    
}

console.log(randomEvenNumber());
