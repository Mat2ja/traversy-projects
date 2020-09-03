// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
    let a = str1.match(/\S/g).sort();
    let b = str2.match(/\S/g).sort();


    if (a === b) return true;
    if (a === null || b === null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
        if (a[i].toLowerCase() !== b[i].toLowerCase()) {
            return false;
        }
    }
    return true;
}

function isAnagram2(str1, str2) {
    return formatString(str1) === formatString(str2);

    function formatString(str) {
        // match only word chars, not symbols nor spaces
        return str.match(/\w/g).sort().join('').toLowerCase();
    }
}

let a = isAnagram2('elbow', 'below') // true
let b = isAnagram2('Dormitory', 'dirty room##'); // true
let c = isAnagram2('kobasa', 'hrenovka'); // false

console.log('a: ', a)
console.log('b: ', b)
console.log('c: ', c)