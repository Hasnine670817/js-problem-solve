

function randomWinner() {
    let slice1 = Math.floor(Math.random() * 6) + 1;
    let slice2 = Math.floor(Math.random() * 6) + 1;
    let slice3 = Math.floor(Math.random() * 6) + 1;
    let slice4 = Math.floor(Math.random() * 6) + 1;
    console.log("Slice values", slice1, slice2, slice3, slice4);

    let person1 = slice1 + slice2
    let person2 = slice3 + slice4;

    console.log("person-1:", person1, "person-2:", person2);

    if (person1 > person2) {
        return "Person 1 Winner"
    }
    else if (person1 === person2) {
        return "Play Again"
    }
    else {
        return "Person 2 Winner"
    }
}

console.log(randomWinner());