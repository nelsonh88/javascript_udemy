// closures

function retirement (retirementAge) {
  let a = ' years left until retirement'
  return function (yearOfBirth) {
    let age = 2018 - yearOfBirth
    console.log((retirementAge - age) + a)
  }
}

const retirementUs = retirement(66)
retirementUs(1992)
retirement(66)(1992)

const retirementGermany = retirement(65)
const retirmentIceland = retirement(67)

retirementGermany(1992)
retirementUs(1992)
retirmentIceland(1992)
/*
const interviewQuestions = function (job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?')
      }
    } else if(job === 'teacher') {
      return function (name) {
        console.log('What subject do you teach, ' + name + '?')
      }
        } else {
          return function (name) {
            console.log('Hello ' + name + ', what do you do?')
      }
  }
}
*/
function interviewQuestions(job) {
  let a = 'can you explain what is UX design?'
  let b = 'What subject do you teach'
  let c = 'what do you do at your job?'
  return function (name) {
    if (job === 'designer') {
      console.log(name + ',' + a)
    }
    else if (job === 'teacher') {
      console.log(b + ' ' + name + '?')
    }
    else {
      console.log(name + ',' + ' ' + c)
    }
  }
}

interviewQuestions('teacher')('Nelson')
