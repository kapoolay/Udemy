/**************************************
 * Coding Challenge 1
 */

 let massJohn, massMark, heightJohn, heightMark;

 massJohn = 170;
 massMark = 150;
 heightJohn = 60;
 heightMark = 50;

 let bmiJohn = massJohn / heightJohn ^2 / (heightJohn * heightJohn);

 let bmiMark = massMark / heightMark ^2 / (heightMark * heightMark);

 let bmiMarkHigher = bmiMark > bmiJohn;

 console.log(bmiMarkHigher);
