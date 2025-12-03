const fs = require('fs');
const input = fs.readFileSync('Day-3/task1_input.txt', 'utf-8').trim(); // Read the input from 'task1_input.txt' file

const banks = input.split('\n'); // Splitting based on new lines
let totalOutputJoltage = 0; // To store the total output joltage

// Function to find the maximum joltage from a bank
function maxJoltage(bank) {
    let max = 0;
    for (let i = 0; i < bank.length; i++) {
        for (let j = i + 1; j < bank.length; j++) {
            const joltage = parseInt(bank[i] + bank[j], 10);
            if (joltage > max) {
                max = joltage; // Update max if a larger joltage is found
            }
        }
    }
    return max;
}

// Iterate through each bank and calculate the total output joltage
banks.forEach(bank => {
    totalOutputJoltage += maxJoltage(bank); // Add the maximum joltage of the bank to the total
});

console.log(totalOutputJoltage); // Output the total output joltage