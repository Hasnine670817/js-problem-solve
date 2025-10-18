
const sentence = "My name is Hasnine Torun. I am a Front-end Developer. I love coding.";

function sentenceFunction(sentence) {

    let counts = [];

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i].toLowerCase();
        if (char === " ") continue;
        if (char === ".") continue; 
        counts[char] = counts[char] ? counts[char] + 1 : 1;
    }

    return counts;

}

console.log(sentenceFunction(sentence));