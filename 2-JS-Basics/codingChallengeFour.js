/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/

const marksInfo = {
  fullName: 'Mark Kelley',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height)
    return this.bmi
  }
}
console.log(marksInfo)
marksInfo.calcBMI()

const johnsInfo = {
  fullName: 'John Kelley',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height)
    return this.bmi
  }
}
console.log(johnsInfo)
johnsInfo.calcBMI()

if (marksInfo.BMI > johnsInfo.BMI) {
  console.log(marksInfo.fullName + ' has a BMI of ' + marksInfo.BMI + ' which is higher than ' + johnsInfo.fullName + '\'s' + ' BMI of ' + johnsInfo.BMI)
} else if (marksInfo.BMI < johnsInfo.BMI) {
  console.log(johnsInfo.fullName + ' has a BMI of ' + johnsInfo.BMI + ' which is higher than ' + marksInfo.fullName + '\'s' + ' BMI of ' + marksInfo.BMI)
} else {
  console.log('It is a tie!!')
}
