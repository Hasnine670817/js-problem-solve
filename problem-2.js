/*
🧠 Problem 2: Toss a coin (Heads or Tails)
*/

function TossACoin() {
    let random = Math.floor(Math.random() * 2);
    console.log(random);
    return random === 0 ? "Heads" :  "Tails";
}

console.log(TossACoin());