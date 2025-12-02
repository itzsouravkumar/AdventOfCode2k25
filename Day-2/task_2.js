const fs = require('fs');
const input = fs.readFileSync('Day-2/task1_input.txt', 'utf-8').trim(); // Read the input from 'task1_input.txt' file

const ranges = input.split(','); // Splitting based on ,
let invalidIDSum = 0; // To store the sum of invalid IDs

// Function to check if a number is an invalid ID
function isInvalidID(num) {
    const strNum = num.toString();
    const len = strNum.length;

    // Check for all possible substring lengths that can form the number by repetition
    for(let subLen = 1; subLen <= Math.floor(len / 2); subLen++) {
        if(len % subLen === 0) { // Only consider lengths that divide evenly
            const times = len / subLen;
            const substring = strNum.slice(0, subLen);
            if(substring.repeat(times) === strNum) {
                return true; // Found a valid repeating pattern
            }
        }
    }
    return false; // No repeating pattern found
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

console.log(invalidIDSum); // Output the total sum of invalid IDs