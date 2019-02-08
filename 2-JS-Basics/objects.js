const john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false
}

console.log(john.lastName)
console.log(john['lastName'])

const xyz = 'job'
console.log(john[xyz])

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
