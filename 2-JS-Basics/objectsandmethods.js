
const john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function() {
    // let age = 2018 - this.yearOfBirth
    // return age
    this.age = 2018 - this.yearOfBirth
  }
}

john.calculateAge()
console.log(john)
// console.log(john.calculateAge())

// let age = john.calculateAge()
// john.age = age
//
// console.log(john)
