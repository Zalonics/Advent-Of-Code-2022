const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'utf-8').split('\n\n')
let elves = []

for (const calories of input) {
    elves.push(calories.split('\n').reduce((total, num) => total + +num, 0))
}
elves.sort((a, b) => b - a)

const [a, b, c] = elves
console.log(a + b + c)
