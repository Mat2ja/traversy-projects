//* CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

//* for loop backwards
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

//* for loop 
function reverseString2(str) {
    let reversed = '';
    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}

//* for-of
function reverseString3(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

//* forEach
function reverseString4(str) {
    let reversed = '';
    str.split('').forEach(char => reversed = char + reversed);
    return reversed;
}

//* reduce
function reverseString5(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
    /* 
    h e l l o
    reversed    - char
    h           - e
    eh          - l
    leh         - l
    lleh        - o
    olleh
    */

}

//* turn to array
function reverseString6(str) {
    // Step 1. Use the split() method to return a new array
    // Step 2. Use the reverse() method to reverse the new created array
    // Step 3. Use the join() method to join all elements of the array into a string
    return str
        .split('')
        .reverse()
        .join('')
}


//* recursion
function reverseString7(str) {
    // if (str === "")
    //     return "";
    // else
    //     return reverseString(str.substr(1)) + str.charAt(0);
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);

    hello
    ello + h
    llo + e
    lo + l
    o + l
    "" + o
    "o"
    ol
    oll
    olle
    olleh
}

function reverseString8(str) {
    let arr = [...str];
    let newArr = arr.map((_, i, arr) => {
        return arr[arr.length - 1 - i];
    });
    
    return newArr.join("");
}




const str = 'hello';
console.log(reverseString(str));
console.log(reverseString2(str));
console.log(reverseString3(str));
console.log(reverseString4(str));
console.log(reverseString5(str));
console.log(reverseString6(str));
console.log(reverseString7(str));
console.log(reverseString8(str));
