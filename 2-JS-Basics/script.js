/*********************************************************************
VIDEO: Variable and data types
*/
/**
 const name = 'Nelson'

console.log(name)

const lastName = 'Huezo'
console.log(lastName)
console.log(name, lastName)

const age = 29
console.log(age)

const fullAge = true
console.log(fullAge)
*/

/*********************************************************************
VIDEO: VARIABLES MUTATION and TYPE COERCION
*/
// type coercion
/*
const firstName = 'Nelson'
let age = 29

console.log(firstName + ' ' + age)

let job, isMarried

console.log(job)

job = 'web developer'
isMarried = false

console.log(firstName + ' is a ' + age + ' year old ' + job + '.' + ' Is ' + firstName + ' married? ' + isMarried + '!')

//variable mutation
age = 30
job = 'front end web developer'

console.log(firstName + ' is a ' + age + ' year old ' + job + '.' + ' Is ' + firstName + ' married? ' + isMarried + '!')
*/

/*********************************************************************
VIDEO: BASIC OPERATORS
*/
/*
let now = 2019
let birthYear = now - 31

birthYear = now - 26 * 2


console.log(birthYear)
*/

/*********************************************************************
VIDEO: OPERATOR PRECEDENCE
*/
/*
let now, yearNelson, fullAge

now = 2019
yearNelson = 1988
fullAge = 18

const isFullAge = now - yearNelson >= fullAge

console.log(isFullAge)

let ageNelson = now - yearNelson
let ageMark = 35
let average = (ageNelson + ageMark) / 2
console.log(average)

ageJohn = ageMark = (3 + 5) * 4 - 6
ageJohn = ageMark = 26
ageJohn = 26
ageJohn++
ageMark *= 2
console.log(ageJohn)
console.log(ageMark)
*/

/*********************************************************************
VIDEO: IF/ELSE STATEMENTS
*/

/*
let name = 'Nelson'
let age = 30
let isMarried = 'no'

if (isMarried === 'yes') {
  console.log(name + ' is married')
} else {
  console.log(name + ' will hopefully marry soon ;)')
}

isMarried = false

if (isMarried) {
  console.log('yes!')
} else {
  console.log('no!')
}
*/

/*********************************************************************
VIDEO: BOOLEAN LOGIC AND SWITCH
*/
/*
let age = 30
if(age < 20) {
  console.log('Nelson is a teenager')
} else if (age >= 20 && age <30){
  console.log('Nelson is a young man')
}else {
  console.log('Nelson is a man')
}
*/

/*********************************************************************
VIDEO: THE TERNARY OPERATOR AND SWITCH STATEMENTS
*/

// Ternary operator
let lastName = 'Huezo'
let age = 30

age >= 21 ? console.log('Mr. ' + lastName + ' drinks beer!') : console.log('Mr. ' + lastName + ' drinks juice!')

let drink = age >= 21 ? 'beer' : 'juice'
console.log(drink);

// switch statement
let job = 'driver'

switch (job) {
  case 'teacher':
  case 'instructor':
    console.log('John teaches kids')
    break
  case 'driver':
    console.log('John drives a cab')
    break
  case 'cop':
    console.log('John helps fight crime')
    break
  default :
    console.log('John does something else')
}

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
