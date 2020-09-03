// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
    let chunked = [];

    while (arr.length) {
        let spliced = arr.splice(0, len);
        chunked.push(spliced);
    }

    return chunked;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));