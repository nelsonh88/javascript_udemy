// build a function constructor

const Question = function (question, choices, answer) {
  this.question = question,
  this.choices = choices,
  this.answer = answer
}

// create questions using the constructor

const q1 = new Question ('What language are you learning?',
 ['JavaScript', 'Ruby'], 0)

const q2 = new Question ('Do you want to continue learning?',
 ['Yes', 'No'], 0 )

const q3 = new Question ('What is my name?',
 ['John', 'Nelson', 'Robe', 'Kaity'], 1)

const q4 = new Question ('Do you feel like you are getting better at JavaScript?',
['Yes', 'No'], 0)

// put the questions in an array

const askQ = [q1, q2, q3, q4]
// console.log(askQ)

const n = Math.floor(Math.random() * askQ.length)
// console.log(n)
// create a method for the constructor
Question.prototype.displayQAndA = function () {
console.log(this.question)
for (let i = 0; i < this.choices.length; i++) {
  console.log(i + ': ' + this.choices[i])
  }
}

Question.prototype.checkAnswer = function (userAnswer) {
  if (userAnswer === this.answer) {
    console.log('Correct Answer')
  } else {
    console.log('Wrong answer, sorry')
  }
}

askQ[n].displayQAndA()


const userAnswer = parseInt(prompt('Please select the correct answer'))

askQ[n].checkAnswer(userAnswer)
