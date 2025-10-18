

const sentence = "My name is Hasnine Torun";

function findWordInSentence(sentence) {
    let splitSentence = sentence.split(" ");
    let countSentenceWord = splitSentence.length;
    return(countSentenceWord);
}

console.log(findWordInSentence(sentence));