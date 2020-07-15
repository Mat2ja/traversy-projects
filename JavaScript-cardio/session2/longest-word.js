// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
    // let senClean = sen.trim().replaceAll(',', '').replaceAll('.', '').replaceAll('!', '').replaceAll('?', '');
    // seems like replaceAll doesn't work in Node...
    let senClean = sen.trim().split(',').join('').split('.').join('').split('!').join('').split('?').join('');
    let arr = senClean.split(" ");

    let longest = []
    let maxLen = 0;

    for (let word of arr) {
        if (word.length > maxLen) {
            longest = [word];
            maxLen = word.length;

        } else if (word.length === maxLen) {
            longest.push(word);
        }
    }

    return longest.length > 1 ? longest : longest[0];
}


console.log(longestWord('Hello..... my name is Brad'));
console.log(longestWord('Hello there, my name is Brad'));