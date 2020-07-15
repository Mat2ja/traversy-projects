//* CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
    const stats = {};
    let maxCount = 0;
    let maxChar = [];

    // iterate over string and pass key:value pairs to stats
    for (let char of str.toLowerCase().trim()) {
        if (char === ' ') continue;
        stats[char] ? stats[char]++ : stats[char] = 1;
    }

    // calculate count of most common character
    maxCount = Math.max(...Object.values(stats));

    // iterate over object and find character based on maxCount
    for (let k in stats) {
        if (stats[k] === maxCount) {
            maxChar.push(k);
        }
    }

    return maxChar.length > 1 ? maxChar : maxChar[0];
}



function maxCharacter2(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.toLowerCase().split('').forEach(char => {
        charMap[char] ? charMap[char]++ : charMap[char] = 1;
    });

    for (let char in charMap) {
        // debugger;
        if (charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
    
}


console.log(maxCharacter('javascript'));
console.log(maxCharacter('javascripttt'));
console.log(maxCharacter('what is the most used string in this sentence, who would know??'));


console.log(maxCharacter2('javascript'));
console.log(maxCharacter2('JuiceWrldTheKid'));



/* const maxChar = (str) => {
    return {
        string: str,
        stats: {},
        maxChar: [],

        getMaxCharacter() {
            for (let chat of string.toLowerCase().trim()) {
                if (char === '') continue;
                char in this ? stats[char]++ : stats[char] = 0;
            }
            this.maxCount = Math.max(...Object.values(this.stats));

            for (let k in stats) {
                if (stats[k] === maxCount) {
                    maxChar.push(k);
                }
            }
            return this.maxCharacter[0];
        },

        printMaxCharacter() {
            let {
                maxChar,
                maxCount
            } = this;

            if (maxChar.lenghth > 1) {
                console.log(`Max character is ${maxChar}, appearing ${maxCount} times`);
            } else {
                console.log(`Max characters are:`); {
                    for (let c of maxChar) {
                        console.log(`${maxChar}, appearing ${maxCount} times`);
                    }
                }
            }

        }
    }
}


let s1 = 'javascript';

printMaxCharacter(s1); */
