const fs = require('fs');

const input = fs.readFileSync('Day-3/task2_input.txt', 'utf-8').trim();
const banks = input.split('\n');

function max12DigitJoltage(bank) {
    const target = 12;
    const stack = [];
    let removable = bank.length - target;

    for (const digit of bank) {
        while (stack.length > 0 && removable > 0 && stack[stack.length - 1] < digit) {
            stack.pop();
            removable--;
        }
        stack.push(digit);
    }

    return stack.slice(0, target).join('');
}

let total = 0n;

for (const bank of banks) {
    const best = max12DigitJoltage(bank);
    total += BigInt(best);
}

console.log(total.toString());
