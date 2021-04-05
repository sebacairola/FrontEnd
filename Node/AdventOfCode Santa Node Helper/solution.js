
/*
Santa is trying to deliver presents in a large apartment building, but he can't find the right floor - the directions he got are a little confusing. He starts on the ground floor (floor 0) and then follows the instructions one character at a time.

An opening parenthesis, (, means he should go up one floor, and a closing parenthesis, ), means he should go down one floor.

The apartment building is very tall, and the basement is very deep; he will never find the top or bottom floors.

For example:

(()) and ()() both result in floor 0.
((( and (()(()( both result in floor 3.
))((((( also results in floor 3.
()) and ))( both result in floor -1 (the first basement level).
))) and )())()) both result in floor -3.

To what floor do the instructions take Santa?
*/


const fs = require('fs');

// Response
fs.readFile('./input.txt', (error, data) => {
    const input = data.toString('utf8');
    const inputArray = input.split('');    
    const answer = inputArray.reduce((acc, currentValue) => {
        if(currentValue === '('){
            return acc += 1;
        } else if(currentValue === ')'){
            return acc -= 1;
        }
    }, 0);
    console.log(`Santa is in the floor number ${answer}.`);
});

/*
const fetch = require('node-fetch');

fetch('https://adventofcode.com/2015/day/1/input')
    .then(res => res.text())
    .then(body => console.log(body));
*/