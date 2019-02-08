// Passing functions as arguments

const years = [1990, 1965, 1937, 2005, 1998]

// created a generic function that loops over an array and we are passing in function
const arrayCalc = function (arr, fn) {
  let arrResult = []
  for (let i = 0; i < arr.length; i++) {
    arrResult.push(fn(arr[i]))
  }
  return arrResult
}

function calculateAge (el) {
  return 2016 - el
}

const isFullAge = function(el) {
  return el >= 18
}

const maxHeartRate = function(el) {
  if ( el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el))
  } else {
    return -1
  }

}

let ages = arrayCalc(years, calculateAge)

let fullAges = arrayCalc(ages, isFullAge)

let rates = arrayCalc(ages, maxHeartRate)
console.log(ages)
console.log(fullAges)
console.log(rates)
