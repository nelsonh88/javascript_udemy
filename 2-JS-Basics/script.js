// const name = 'Nelson'
//
// console.log(name)
//
// const lastName = 'Huezo'
// console.log(lastName)
// console.log(name, lastName)
//
// const age = 29
// console.log(age)
//
// const fullAge = true
// console.log(fullAge)

// const firstName = 'Nelson'
// let age = 29
//
// console.log(firstName + ' ' + age)
//
// let job, isMarried
//
// console.log(job)
//
// job = 'web developer'
// isMarried = false
//
// console.log(job)
//
// age = 'twenty-nine'
// job = 'personal trainer'
//
// console.log(age + ' ' + job)

// Lecture operators
// let now = 2018
// let birthYear = now - 30
//
// birthYear = now - 26 * 2
//
//
// console.log(birthYear)
//
// let ageJohn = 30
// let ageMark = 30

// ageJohn = ageMark = (3 + 5) * 4 - 6
// ageJohn = ageMark = 26
// ageJohn = 26
// ageJohn++
// ageMark *= 2
// console.log(ageJohn)
// console.log(ageMark)

// Lecture if/else statement

// let name = 'Nelson'
// let age = 30
// let isMarried = 'no'
//
// if (isMarried === 'yes') {
//   console.log(name + ' is married')
// } else {
//   console.log(name + ' will hopefully marry soon ;)')
// }
//
// isMarried = false
//
// if (isMarried) {
//   console.log('yes!')
// } else {
//   console.log('no!')
// }

// lecture: boolean logic and switch

// let age = 25
// if(age < 20) {
//   console.log('Nelson is a teenager')
// } else if (age >= 20 && age <30){
//   console.log('Nelson is a young man')
// }else {
//   console.log('Nelson is a man')
// }
//
// let job = 'driver'
//
// switch (job) {
//   case 'teacher':
//     console.log('John teaches kids')
//     break
//   case 'driver':
//     console.log('John drives a cab')
//     break
//   case 'cop':
//     console.log('John helps fight crime')
//     break
//   default :
//     console.log('John does something else')
// }

// coding challenge 1

let ageNelson = 29
let ageRicky = 24
let ageBrian = 19
let heightNelson = 100
let heightRicky = 150
let heightBrian = 180

let scoreNelson = heightNelson + (ageNelson * 5)
let scoreRicky = heightRicky + (ageRicky * 5)
let scoreBrian = heightBrian + (ageBrian * 5)

const gameScore = function (scoreNelson, scoreRicky, scoreBrian) {
  if (scoreNelson > scoreRicky && scoreNelson > scoreBrian) {
    console.log('Nelson is the winner with a score of ' + scoreNelson)
  } else if (scoreRicky > scoreNelson && scoreRicky > scoreBrian) {
    console.log('Ricky is the winner with a score of ' + scoreRicky)
  } else if (scoreBrian > scoreNelson && scoreBrian > scoreRicky) {
    console.log('Brian is the winner with a score of ' + scoreBrian)
  } else {
    console.log('It is a tie with a equal score of ', scoreNelson)
  }

}

gameScore(scoreNelson, scoreRicky, scoreBrian)

// going to add a third player using the code above
