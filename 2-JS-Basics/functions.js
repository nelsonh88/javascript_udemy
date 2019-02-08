/*********************************************************************
VIDEO: FUNCTIONS
*/

/*
const calculateAge = function (yearOfBirth){
  let age = 2019 - yearOfBirth
  return age
}

let ageNelson = calculateAge(1988)
let ageMike = calculateAge(1969)
console.log(ageNelson)
console.log(ageMike)


const yearsUntilRetirement = function (name, year) {
let age = calculateAge(year)
let retirement = 65 - age
if (retirement >= 0) {
console.log(name + ' can retire in ' + retirement + ' years!')
} else {
  console.log(name + ' has already retired!')
}
}

yearsUntilRetirement('Nelson', 1988)
yearsUntilRetirement('Mary', 1948)
*/

/*********************************************************************
VIDEO: FUNCTION STATEMENTS AND EXPRESSIONS
*/

// fucntion expression
// function statement
    // function someFun(par) {
    //code
    // }
// Function expression
    // const someFun = function(par) {
    //code
    // }
const whatDoYouDo = function(job, firstName) {
  switch (job) {
    case 'teacher':
      return firstName + ' teaches the streets!'
    case 'designer':
      return firstName + ' designs for the streets!'
    case 'web developer':
      return firstName + ' develops for the streets!'
    default:
      return firstName + ' is a bum and has no job'
  }
}

console.log(whatDoYouDo('web developer', 'Papi'))
console.log(whatDoYouDo('designer', 'Papi'))
console.log(whatDoYouDo('teacher', 'Papi'))
console.log(whatDoYouDo('pharmacist', 'Papi'))
