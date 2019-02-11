/***************************************
* VIDEO: FUNCTIONS RETURNING FUNCTIONS
*/
// functions returning functions

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

let teacherQuestion = interviewQuestions('teacher')
let designerQuestion = interviewQuestions('designer')
let noIdeaWhatJob = interviewQuestions('boxer')

teacherQuestion('John')
designerQuestion('John')
noIdeaWhatJob('Nelson')

// You could do it this method too without having to store it
interviewQuestions('teacher')('Mark')
