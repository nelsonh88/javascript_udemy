/*********************************************************************
VIDEO: ARRAYS
*/

const names = ['John', 'Jane', 'Mark']

// below is a different way to write arrays
const years = new Array(1990, 1969, 1948)

// mutate the array
console.log(names[1])
names[1] = 'Ben'
console.log(names[1])
console.log(names)
console.log(names.length)

const john = ['John', 'Smith', 1990, 'designer', false]
console.log(john)

// .push pushes a new value at the end of the array
john.push('blue')
console.log('this is push', john)

// .unshift pushes a value to the beginning of the array
john.unshift('Mr.')
console.log('this is unshift', john)

// .pop takes out the last value in the array
john.pop()
console.log('this is pop', john)

// .shift takes out the first value in the array
john.shift()
console.log('this is shift', john)

john.indexOf('Smith')
console.log(john.indexOf('Smith'))

if (john.indexOf('teacher') === -1) {
  console.log('John is not a teacher')
}
