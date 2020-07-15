//* CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
    let reversedStr = int.toString().split('').reverse().join('');

    return parseInt(reversedStr) * Math.sign(int);
}

console.log(reverseInt(12345));
console.log(reverseInt(-12345));