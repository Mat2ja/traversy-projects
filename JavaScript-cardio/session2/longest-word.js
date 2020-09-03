// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
    const words = sen.toLowerCase().match(/[\d\w]+/g);
    console.log(words);

    words.sort((a, b) => b.length - a.length);

    let longest = words.filter(word => word.length === words[0].length);

    return longest.length > 1 ? longest : longest[0];
}


console.log(longestWord('Hello freaky bithcess..... my name is Brad?!? !? ?!'));
console.log(longestWord('Hello there, boomshakalaka vroomhakalaka my name is Brad'));