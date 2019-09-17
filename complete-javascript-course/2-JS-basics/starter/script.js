/******************************************
* Variables and data types
*/
/*
let firstName = 'Kevin';
console.log(firstName)

let lastName = 'Capule';
let age = 27;

let fullAge = true;
console.log(fullAge);

let job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
let $3years = 3;
let _johnMark = 'John and Mark';
*/



 /******************************************
* Variable mutation and type coercion
*/  
/*
let firstName = 'John';
let age = 28;

// Type coercion
console.log(firstName + ' ' + age);

let job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

let lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/ 




/******************************************
 *  Basic operators
 */
/*
let now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operators
let johnOlder = ageJohn < ageMark;
console.log(johnOlder);



// typeOf operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
let x;
console.log(typeof x);
*/



/******************************************
* Operator precedence
*/
/*
let now = 2018;
let yearJohn = 1989;
let fullAge = 18;

// Multiple operators
let isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
let ageJohn = now - yearJohn;
let ageMark = 35;
let average = (ageJohn + ageMark) / 2;
console.log(average); 

// Multiple assignments
let x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26 // assignment operator works left to right
console.log(x, y);


// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--; //incrementing/decrementing by 1
console.log(x);
*/


/**************************************
 * Coding Challenge 1
 */

let massJohn, massMark, heightJohn, heightMark;

massMark = 78; // kg
massJohn = 92; // kg

heightMark = 1.69; // m
heightJohn = 1.95; // m

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log('Mark\'s BMI: ' + BMIMark, 'John\'s BMI: ' +BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);