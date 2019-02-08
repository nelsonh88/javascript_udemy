/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").
GOOD LUCK 😀
*/

let marksMass, johnsMass, marksHeight, johnsHeight

marksMass = 78
johnsMass = 92
marksHeight = 1.69
johnsHeight = 1.95

let bmiMark = marksMass / (marksHeight * marksHeight);
console.log(bmiMark);
let bmiJohn = johnsMass / (johnsHeight + johnsHeight);
console.log(bmiJohn);
let markComparedToJohn = bmiMark > bmiJohn
console.log('Does Mark have a higher BMI than John?', markComparedToJohn)
