const names = ['John', 'Jane', 'Mark']
// below is a different way to write arrays
const years = new Array(1990, 1969, 1948)

console.log(names[1])
names[1] = 'Ben'
console.log(names[1])

const john = ['John', 'Smith', 1990, 'designer', false]
console.log(john)

john.push('blue')
console.log(john)

john.unshift('Mr.')
console.log(john)

john.pop()
console.log(john)

john.shift()
console.log(john)

john.indexOf('Smith')
console.log(john.indexOf('Smith'))

if (john.indexOf('teacher') === -1) {
  console.log('John is not a teacher')
}
