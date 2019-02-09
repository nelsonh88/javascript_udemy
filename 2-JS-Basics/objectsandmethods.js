/*********************************************************************
VIDEO: OBJECTS AND METHODS
*/
const john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function(year) {
    // let age = 2018 - this.yearOfBirth
    // return age
    this.age = year - this.yearOfBirth
  }
}
console.log(john)

john.calculateAge(2019)
console.log(john)
// console.log(john.calculateAge())

// let age = john.calculateAge()
// john.age = age
//
// console.log(john)
