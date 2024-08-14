/// === Syntax ===

// Variables and constants
let variable = 42;
const constantValue = 'Hello, World!';
const array = [1, 2, 3, 4, 5];

// Template literals
const greeting = `The value is ${variable} and the constant is ${constantValue}`;

// Object with nested properties
const person = {
    name: 'Alice',
    age: 30,
    address: {
        city: 'Wonderland',
        postalCode: '12345'
    },
    hobbies: ['reading', 'chess']
};

// Destructuring assignment
const { name, age, address: { city } } = person;
const [firstHobby, ...otherHobbies] = person.hobbies;

// Arrow functions
const add = (a, b) => a + b;

// Higher-order function with callback
const performOperation = (a, b, operation) => operation(a, b);
const sum = performOperation(10, 5, add);

// Spread operator
const newArray = [...array, 6, 7, 8];

// Rest parameters
function printAll(...args) {
    console.log(args);
}

// Closures
function createCounter() {
    let count = 0;
    return function () {
        count += 1;
        return count;
    };
}
const counter = createCounter();

// Async function with try/catch and promise
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// Class with inheritance and static methods
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }

    static species() {
        return 'Animal';
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }

    static species() {
        return 'Dog';
    }
}

// Using the class
const myDog = new Dog('Rex', 'Labrador');
myDog.speak(); // Rex barks.
console.log(Dog.species()); // Dog

// IIFE (Immediately Invoked Function Expression)
(function () {
    console.log('IIFE running!');
})();

// Using the imported function
console.log(1337);

// Conditional (ternary) operator
const result = variable > 40 ? 'Greater than 40' : 'Less than or equal to 40';

// Bitwise operators
const bitwiseResult = 5 & 3;

// Regular expressions
const regex = /hello/i;
const regexTest = regex.test('Hello world');

/// === Control Flow ===

// Control Flow: if-else statement
function checkNumber(num) {
    if (num > 0) {
        console.log(`${num} is positive`);
    } else if (num < 0) {
        console.log(`${num} is negative`);
    } else {
        console.log(`${num} is zero`);
    }
}

// Control Flow: switch statement
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        default:
            return 'Invalid day';
    }
}

// Loops: for loop
function printNumbersUpTo(n) {
    for (let i = 0; i <= n; i++) {
        console.log(i);
    }
}

// Loops: while loop
function countdown(start) {
    while (start > 0) {
        console.log(start);
        start--;
    }
    console.log('Blast off!');
}

// Loops: do-while loop
function doUntilZero(start) {
    do {
        console.log(start);
        start--;
    } while (start > 0);
}

// Loops: for...in loop (iterating over object properties)
const person2 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
};

function printPersonDetails(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

// Loops: for...of loop (iterating over iterable objects like arrays)
const fruits = ['apple', 'banana', 'cherry'];

function listFruits(fruitArray) {
    for (const fruit of fruitArray) {
        console.log(fruit);
    }
}

// Using the functions
checkNumber(10);          // 10 is positive
checkNumber(-5);          // -5 is negative
checkNumber(0);           // 0 is zero

console.log(getDayName(3));  // Wednesday
console.log(getDayName(7));  // Invalid day

printNumbersUpTo(5);      // 0, 1, 2, 3, 4, 5

countdown(5);             // 5, 4, 3, 2, 1, Blast off!

doUntilZero(3);           // 3, 2, 1

printPersonDetails(person2); // firstName: John, lastName: Doe, age: 25

listFruits(fruits);        // apple, banana, cherry

/// === Combined ===

// Function to process a matrix of numbers
function processMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];

        for (let j = 0; j < row.length; j++) {
            const value = row[j];

            // Nested if-else inside a for loop
            if (value > 0) {
                if (value % 2 === 0) {
                    console.log(`Even positive number found: ${value}`);
                } else {
                    console.log(`Odd positive number found: ${value}`);
                }
            } else if (value < 0) {
                console.log(`Negative number found: ${value}`);
            } else {
                console.log(`Zero found at position [${i}, ${j}]`);
            }

            // Nested switch inside the if-else
            switch (value) {
                case 1:
                    console.log(`Value is exactly one.`);
                    break;
                case -1:
                    console.log(`Value is exactly negative one.`);
                    break;
                case 0:
                    console.log(`Encountered a zero.`);
                    break;
                default:
                    console.log(`Value is neither 1, -1, nor 0.`);
            }

            // Nested while loop inside the switch
            let countdown = value;
            while (countdown > 0) {
                console.log(`Countdown from ${countdown}`);
                countdown--;

                // Nested do-while loop inside the while loop
                let doubleCountdown = countdown;
                do {
                    console.log(`  Double countdown: ${doubleCountdown}`);
                    doubleCountdown--;
                } while (doubleCountdown > 0);
            }
        }
    }
}

// Example matrix to test the function
const matrix = [
    [1, -2, 3],
    [0, 4, -5],
    [-1, 0, 6]
];

// Call the function with the matrix
processMatrix(matrix);
