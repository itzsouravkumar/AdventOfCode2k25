const fs = require('fs');
const input = fs.readFileSync('Day-2/task1_input.txt', 'utf-8').trim(); // Read the input from 'task1_input.txt' file

const ranges = input.split(','); // Splitting based on ,
let invalidIDSum = 0; // To store the sum of invalid IDs

// Function to check if a number is an invalid ID
function isInvalidID(num) {
    const strNum = num.toString();
    const len = strNum.length;

    // twice repeated -> even length
    if(len % 2 !== 0) return false;

    const half = len / 2;
    const firstHalf = strNum.slice(0, half);
    const secondHalf = strNum.slice(half);

    return firstHalf === secondHalf; // Check if both halves are equal
}

// Iterate through each range
ranges.forEach(range => {
    const [start, end] = range.split('-').map(Number); // Split the range and convert to numbers

    // Check each number in the range
    for(let num = start; num <= end; num++) {
        if(isInvalidID(num)) {
            invalidIDSum += num; // Add to sum if it's an invalid ID
        }
    }
});

console.log(invalidIDSum); // Output the result