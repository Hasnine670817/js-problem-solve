

const sentence = "JSONPlaceholder is supported by the following companies and Sponsors on GitHub, check them out";

function countSentenceCharacter(sentence) {
    let counts = [];

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i].toLowerCase();
        if (char === " ") continue;
        counts[char] = counts[char] ? counts[char] + 1 : 1;
    }

    return counts;
}

console.log(countSentenceCharacter(sentence));