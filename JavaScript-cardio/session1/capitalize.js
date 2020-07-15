// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(str) {
    let arr = str.toLowerCase().split(' ');
    let newArr = []

    for (let word of arr) {
        word = word.replace(word[0], word[0].toUpperCase());
        newArr.push(word);
    }

    return newArr.join(' ');
}


function capitalizeLetters2(str) {
    let arr = str.toLowerCase().split(' ');

    for (let i = 0; i < arr.length; i++) {
        //arr[i] = arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1);
        arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
    }

    return arr.join(' ')

}

function capitalizeLetters3(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word[0].toUpperCase().concat(word.slice(1)))
        .join(' ')
}

function capitalizeLetters4(str) {

    return str
        .toLowerCase()
        .split(' ')
        .map(s => s[0].toUpperCase() + s.substring(1))
        .join(' ');
}

// regex
function capitalizeLetters5(str) {

    return str.replace(/\b[a-z]/gi, (char) => char.toUpperCase());
}


let str = 'i love javaScript'
console.log(capitalizeLetters(str));
console.log(capitalizeLetters2(str));
console.log(capitalizeLetters3(str));
console.log(capitalizeLetters4(str));
console.log(capitalizeLetters5(str));