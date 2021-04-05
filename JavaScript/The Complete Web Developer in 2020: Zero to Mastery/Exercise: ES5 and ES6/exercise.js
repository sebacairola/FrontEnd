// change everything below to the newer Javascript!

// let + const
/*
var a = 'test';
var b = true;
var c = 789;
a = 'test2';
*/

// Answer
let a = 'test';
const b = true;
const c = 789;
a = 'test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

/*
var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;
*/

// Answer
let { firstName, lastName, age, eyeColor } = person;
/**
 * Is the same as:
 * 
 * let firstName = person.firstName;
 * let lastName = person.lastName;
 * let age = person.age;
 * let eyeColor = person.eyeColor;
 */


// Object properties

var d = 'test';
var e = true;
var f = 789;

/*
var okObj = {
  d: d,
  e: e,
  f: f
};
*/

// Answer
const okObj = {
    d, 
    e, 
    f
}

/**
 * Is the same as:
 * 
 * const okObj = {
 *      d: d,
 *      e: e,
 *      f: f
 * }
 */


// Template strings
//var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

// Answer
const city = "Buenos Aires";
const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;


// default arguments
// default age to 10;
/* function isValidAge(age) {
    return age
} */

// Answer
function isValidAge(age=10){
    return age;
}


// Symbol
// Create a symbol: "This is my first Symbol"

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

// Answer
const whereAmI2 = (username, location) => {
    if(username && location){
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}