// object.create method

const personProto = {
  calculateAge: function () {
    console.log(2016 - this.yearOfBirth)
  }
}

const john = Object.create(personProto)
john.name = 'John'
john.yearOfBirth = 1990
john.job ='teacher'


const jane = Object.create(personProto,
{
  name: { value: 'Jane'},
  yearOfBirth: { value: 1969},
  job: { value: 'designer'}









})
