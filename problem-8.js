/*
🧩 Problem 4: Generate a 6-digit OTP

Question:
Write a function that generates a random 6-digit OTP (like 345678).
*/

function generatesRandomNumber() {
    let randomNum = Math.floor(100000 + Math.random() * 900000);
    return randomNum;
}

console.log(generatesRandomNumber());