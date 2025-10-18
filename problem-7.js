/*
🧩 Problem 7: Pick a Random Name

Question:
Write a function that picks a random name from an array of names.
*/

function randomNames() {
    const names = ["Torun", "Zahid", "Nayon", "Shanto"];
    let randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

console.log(randomNames());