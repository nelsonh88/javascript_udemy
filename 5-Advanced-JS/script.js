// function constructor

// const john = {
//   name: 'John',
//   yearOfBirth: 1990,
//   job: 'teacher'
// }


const Person = function(name, yearOfBirth, job) {
  this.name = name,
  this.yearOfBirth = yearOfBirth,
  this.job = job
}

// instantiation

Person.prototype.calculateAge = function() {
  console.log(2018 - this.yearOfBirth)
}

Person.prototype.lastName = 'Smith'

const john = new Person('John', 1990, 'teacher')

john.calculateAge()

const jane = new Person ('Jane', 1971, 'designer')
const mark = new Person ('Mark', 1950, 'retired')

jane.calculateAge()
mark.calculateAge()
console.log(john.lastName)
console.log(jane.lastName)
console.log(mark.lastName)



// for window space
