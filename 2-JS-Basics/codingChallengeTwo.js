

const birthYears = [1988, 1992, 1994, 1998, 1999, 1987, 2008]

const printFullAge = function (birthYears) {
  const ages = []
  const fullAges = []

  for (let i = 0 ; i < birthYears.length; i++) {
    ages[i]= 2018 - birthYears[i]
  }

  for (i = 0 ; i < birthYears.length; i++) {
    if (ages[i] >= 18) {
      console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old and is of full age')
      fullAges.push(true)
    } else {
      console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old and is NOT of full age')
      fullAges.push(false)
    }
  }
  return fullAges
}

let full_1 = printFullAge(birthYears)
let full_2 = printFullAge([2012, 1915, 1999])
