//Solve these problems:

//#1 Create a one line function that adds two parameters
const sum = (a, b) => a + b;


//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3) // This line returns 30


//Currying: What does the last line return?
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) // This line returns 31


//Currying: What does the last line return?
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12) // This line returns 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) // This line returns 16

//What are the two elements of a pure function?
// Aboid side effects and determinism