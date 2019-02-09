/*********************************************************************
VIDEO: OBJECTS
*/

// creating a object using object literal
const john = {
  firstName: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob', 'Emily']
}

console.log(john)
// you can acces keys from the array using dot notation or brackets
console.log(john.lastName)
console.log(john['lastName'])

const xyz = 'job'
console.log(john[xyz])

// how to mutate a object property
john.lastName = 'Miller'
john.job = 'Programmer'
console.log(john)

// new way to create a a object

const jane = new Object()
jane.name = 'Jane'
jane.lastName = 'Smith'
jane['yearOfBirth'] = 1969
jane['job'] = 'retired'
jane['isMarried'] = true

console.log(jane)
