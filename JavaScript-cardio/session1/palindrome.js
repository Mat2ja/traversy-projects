//* CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) return false
    }
    return true;
}




function isPalindrome2(str) {
    const reversed = str.split('').reverse().join('');

    return reversed === str;
}



const str1 = 'racecar'
const str2 = 'not'
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));

console.log(isPalindrome2(str1));
console.log(isPalindrome2(str2));