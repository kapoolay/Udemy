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
 

let massMark = 78; // kg
let heightMark = 1.69; // m

let massJohn = 92; // kg
let heightJohn = 1.95; // m

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log('Mark\'s BMI: ' + BMIMark, 'John\'s BMI: ' +BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

*/












/******************************************
 * If / else statements
 

let firstName = 'John';
let civilStatus = 'single';

if (civilStatus === 'married') {    // logical operator returning true/false
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


let isMarried = true;
if (isMarried) {    // logical operator returning true/false
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}




let massMark = 78; // kg
let heightMark = 1.69; // m

let massJohn = 92; // kg
let heightJohn = 1.95; // m

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) { 
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}

*/

/******************************************
 * Boolean Logic


let firstName = 'John';
let age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}

 */


/******************************************
 * The Ternary Operator and Switch Statements
 */

 //let firstName = 'John';
 //let age = 24;

/* Ternary operator
 age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

let drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/* if (age >= 18) {
    let drink = 'beer';
} else {
    let drink = 'juice';
}

// Switch statement 
let job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');      // if statement
        break;
    case  'driver':      // else if statement               
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':    // else if statement
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:        // else statement
        console.log(firstName + ' does something else.');    
}


switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

*/


/******************************************
 * Truthy and Falsy calues and equality operators
 */
/*
 // falsy values: undefined, null, 0, '', Nan
 // truthy values: NOT falsy values

 let height;

 height = 23;

 if (height || height === 0) {
     console.log('Variable is defined');
 } else {
     console.log('Variable has NOT been defined');
 }
 
 // Euality operators
 if (height === 23) {      // == does type coercion between strings and integers
     console.log('The == operator does type coercion!');
 }
*/



/******************************************
 * Coding Challenge 2
 */
/*
 let scoreJohn = (89 + 120 + 103) / 3;
 let scoreMike = (116 + 94 + 123) / 3;
 let scoreMary = (97 + 134 + 105) / 3;

 console.log('John: ' + scoreJohn, 'Mike: ' + scoreMike, 'Mary ' + scoreMary);
 
 if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
     console.log('John wins with ' + scoreJohn + ' points.')
 } else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
     console.log('Mike wins with ' + scoreMike + ' points.')
 } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
     console.log('Mary wins with ' + scoreMary + ' points.')
 } else {
     console.log('It is a draw!');
 }

 /*if (scoreJohn > scoreMike) {
     console.log('John\'s team wins with a score of ' + scoreJohn);
 } else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with a score of ' + scoreMike);
 } else {
    console.log('It is a draw');
 }*/

















/******************************************
  * Functions
  */
/*
function calculateAge(birthYear) {            // functionName(argument)
    return 2019 - birthYear;
}

let ageJohn = calculateAge(1990); // calling function and assigning this value to variable ageJohn
let ageMike = calculateAge(1948); // calling function and assigning this value to variable ageMike
let ageJane = calculateAge(1969); // calling function and assigning this value to variable ageJane
console.log(ageJohn, ageMike, ageJane);  // 


function yearsUntilRetirement(year, firstName) {
    let age = calculateAge(year);
    let retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
    console.log(firstName + ' is already retired.');
    }
}


yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/



/***************************************
 * Function Statements and Expressions
 */
/*
// Function declaration
// function whatDoYouDo(job, firstName) {}

 // Function Expression
let whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';       // using return finishes the function, so you don't need 'break'
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs websites.';
        default:
            return firstName + ' does something else.'
    }
}

console.log(whatDoYouDo('teacher', 'John')); // returns 'John teaches kids how to code.'
console.log(whatDoYouDo('retired', 'Jane')); // returns 'Jane designs websites.'
console.log(whatDoYouDo('retired', 'Mark')); // returns 'Mark does something else.'

*/


/***************************************
 * Array
 */
/*
 // Initialize new array
 let names = ['John', 'Mark', 'Jane'];
 let years  = new Array(1990, 1969, 1948);

 console.log(names[2]);
 console.log(names.length);

 // Mutate array data 
 names[1] = 'Ben';
 names[names.length] = 'Mary'; // adds 'Mary' to the end of the array. Much like .push()
 console.log(names);

 // Different data types
 let john = ['John', 'Smith', 1990, 'designer', false];

 john.push('blue');  // adds to the end of the array
 john.unshift('Mr.');  //adds to the beginning of the array
 console.log(john);

 john.pop();  // removes the last element of the array
 john.pop();
 john.shift();  // removes the first element of the array
 console.log(john);

 console.log(john.indexOf(1990));

 
john.indexOf('designer') === -1 ? console.log('John is NOT a designer') : console.log('John IS a designer');

*/















/***************************************
 * Coding Challenge 3
 */
/*
function tipCalculator(bill) {
    let tip;
    if (bill < 50) {
        tip = bill * .20;
    } else if (bill >= 50 && bill < 200) {
        tip = bill * .15;
    } else {
        tip = bill * .10;
    }
    return tip;
}

let bill = [124, 48, 268];

let tips = [tipCalculator(bill[0]), tipCalculator(bill[1]), tipCalculator(bill[2])];
console.log(tips);

let totalBill = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
console.log(totalBill);
*/







/***************************************
 * Objects and properties
 *
 */
/*
// Object literal
 let john = {
     firstName: 'John',
     lastName: 'Smith',
     birthYear: 1990,
     family: ['Jane', 'Mark', 'Bob', 'Emily'],
     job: 'teacher',
     isMarried: false,
 };
 console.log(john.firstName);
 console.log(john['lastName']);
 let x = 'birthYear';
 console.log(john[x]);

 john.job = 'designer';
 john['isMarried'] = true;
 john.car = 'Audi';
 console.log(john);

 // new Object Syntax
let jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

*/

/****************************
 * Objects and Methods
 */
/*
let john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) {
        this.Age = 2019 - this.birthYear; // 'this.' keyword allows you to point to the object inside the curly braces. POWERFUL keyword.
    }
};
john.calcAge();
console.log(john);
*/






/********************************************
 * Coding Challenge 4
 */
/*
let mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

let john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

mark.calcBMI();
john.calcBMI();
console.log(mark, john);

if (mark.BMI > john.BMI) {
    console.log(mark.fullName + '\'s BMI is higher at ' + mark.BMI)
} else if (john.BMI > mark.BMI) {
    console.log(john.fullName + '\'s BMI is higher at ' + john.BMI)
} else {
    console.log('They have the same BMI!')
}
*/







/******************************************
 * Loops and iteration
 */
/*

 // For Loop
for (let i = 0; i < 10; i += 2) {
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i ++
// ...
// i = 9, 9 < 10 true, log i to console, i++
// i = 10, 10 < 10 FALSE, exit the loop!

let john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (let i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While Loop
let i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}

*/
/*
// continue and break statements

let john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (let i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;  // continue goes on to the next iteration without printing
    console.log(john[i]);
}

for (let i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;  // break ends the iteration and exits the loop
    console.log(john[i]);
}


// Looping backwards

for (let i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}

*/


/**********************************************
 * Coding Challenge 5
 */

 let john = {
     firstName: 'John Smith',
     bills: [124, 48, 268, 180, 42],
     tipCalc: function() {
         this.allTips = [];
         this.allTotals = [];
         for (let i = 0; i < this.bills.length; i++) {

            //Determine percentage based on tipping rules 
            let percent;
             // let bill = this.bills[i];

             if (this.bills[i] < 50) {
                 percent = .20;
             } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                percent = .15;
             } else {
                 percent  = .10;
             }

             // Add results to the corresponding arrays
             this.allTips[i] = this.bills[i] * percent;
             this.allTotals[i] = this.bills[i] + this.bills[i] * percent;
        }  
    }
 }

 john.tipCalc();            //calling the function in the object calculating the tips/totals


 let mark = {
    firstName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    tipCalc: function() {
        this.allTips = [];
        this.allTotals = [];
        for (let i = 0; i < this.bills.length; i++) {

           //Determine percentage based on tipping rules 
           let percent;
            // let bill = this.bills[i];

            if (this.bills[i] < 100) {
                percent = .20;
            } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
               percent = .10;
            } else {
                percent  = .25;
            }

            // Add results to the corresponding arrays
            this.allTips[i] = this.bills[i] * percent;
            this.allTotals[i] = (this.bills[i] * percent) + this.bills[i];
       }  
   }
}

mark.tipCalc();         //calling the function in the object calculating the tips/totals



function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length
}



john.Average = average(john.allTips);
mark.Average = average(mark.allTips);

if (john.Average > mark.Average) {
    console.log(john.firstName + '\s family had the higher average tip at $' + john.Average)
} else if (mark.Average > john.Average) {
    console.log(mark.firstName + '\s family had the higher average tip at $' + mark.Average)
} else {
    console.log('Both families had the same average.');
}


















