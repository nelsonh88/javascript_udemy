// lecture: functions

const calculateAge = function (yearOfBirth){
  let age = 2018 - yearOfBirth
  return age
}

let ageNelson = calculateAge(1988)
let ageMike = calculateAge(1969)
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
