// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
    return str
        .split('')
        .map(char => {
            // return char if non-letter
            if (/\W/.test(char)) return char;

            // get code from lowercase letter
            const charCode = char.toLowerCase().charCodeAt(0);
            const start = 'a'.charCodeAt(0);

            const newCode = (charCode + 1 - start) % 26 + start;
            return String.fromCharCode(newCode);
        })
        .join('')
        .replace(/[aeiou]/, vowel => vowel.toUpperCase());
}

let a = letterChanges('hello there');
console.log(a);