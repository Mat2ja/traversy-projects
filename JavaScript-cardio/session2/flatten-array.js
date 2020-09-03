// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arr) {
    let flattened = [];

    for (let el of arr) {
        if (Array.isArray(el)) {
            let subArr = flattenArray(el);
            flattened = flattened.concat(subArr);
        } else {
            flattened.push(el);
        }
    }

    return flattened;
}


function flattenArray2(arr) {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            newArr.push(arr[i][j])
        }
    }

    return newArr;
}

function flattenArray3(arr) {
    return arr.flat();
}

let array = [[1, 2], [3, 4], [5, 6], [7]];

console.log(flattenArray(array))
console.log(flattenArray2(array))
console.log(flattenArray3(array))
