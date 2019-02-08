//primitives vs Objects

//primitives
let a = 23
let b = a
a = 46
console.log('A is ', a)
console.log('B is ', b)

// objects
let obj1 = {
  name: 'John',
  age: 26
}

let obj2 = obj1
obj1.age = 30
console.log("Object 1's age is ", obj1.age)
console.log("Object 2's age is ", obj2.age)

// functions
let age = 27
let obj = {
  name: 'Jonas',
  city: 'Lisbon'
}

function change(a, b) {
  a = 30
  b.city= 'San Francisco'
}

change(age, obj)

console.log('age is ', age)
console.log('obj.city is ', obj.city)
