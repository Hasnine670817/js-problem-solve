/*
🧠 Problem 4: Pick a random item from an array
*/

function randomFruits() {
    let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];
    let randomIndex = Math.floor(Math.random() * fruits.length);
    return fruits[randomIndex];
}

console.log(randomFruits());