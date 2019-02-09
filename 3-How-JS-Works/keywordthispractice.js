///////////////////////////////////////
// Lecture: The this keyword

// console.log(this)

// calculateAge(1985)
//
// function calculateAge(year) {
//   console.log(2018-year)
//   console.log(this)
// }

const john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function (year) {
    console.log(this)
    console.log(year - this.yearOfBirth)

    function innerFunction() {
      console.log(this)
    }
    innerFunction()
  }
}

john.calculateAge(2019)

let mike = {
  name: 'Mike',
  yearOfBirth: 1984
}

mike.calculateAge = john.calculateAge
mike.calculateAge(2019)
console.log(mike)
