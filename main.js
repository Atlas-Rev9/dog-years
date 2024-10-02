// Declared a variable named myAge and set it's value to a number data type.
let myAge = 42;

// New variable with the value of a number that will change later.
let earlyYears = 2;

earlyYears *= 10.5;
 
let laterYears = myAge - 2;

// Reassigned the laterYears variable to the result of multiplying it by 4...
laterYears *= 4;

// New variable declared with the value of the result of adding two other variables together.
let myAgeInDogYears = earlyYears + laterYears;

// This new variable has the built in JS string method attached to it that will lowercase all the letters of the string value.
let myName = 'Sloan'.toLowerCase();

// String interpolation with the results...
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);




