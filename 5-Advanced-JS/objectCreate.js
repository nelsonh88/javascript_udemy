/***************************************
* VIDEO: CREATING OBJECTS: FUNCTION CONSTRUCTORS
*/

// function constructor
/*

const john = {
  name = 'John',
  yearOfBirth = 1990,
  job ='teacher'
}

// to build a function constructor you have the convention is to write it with a
// capital letter like below
const Person = function(name, yearOfBirth, job) {
  this.name = name,
  this.yearOfBirth = yearOfBirth,
  this.job = job
}
console.log(Person)

Person.prototype.calculateAge = function (year) {
  console.log(year - this.yearOfBirth)
}
console.log(Person)
// now we will create a new John object using the constructor
const john = new Person('John', 1990, 'teacher')
console.log(john);



const jane = new Person('Jane', 1969, 'designer')

const mark = new Person('Mark', 1948, 'retired')

john.calculateAge(2019)
mark.calculateAge(2019)
jane.calculateAge(2019)
 */
/*****************************************
* VIDEO: CREATING OBJECTS: OBJECT.CREATE
*/

// object.create method

const personProto = {
  calculateAge: function () {
    console.log(2016 - this.yearOfBirth)
  }
}

const john = Object.create(personProto)
john.name = 'John',
john.yearOfBirth = 1990,
john.job ='teacher'


const jane = Object.create(personProto,
{
  name: { value: 'Jane'},
  yearOfBirth: { value: 1969},
  job: { value: 'designer'}

  })
