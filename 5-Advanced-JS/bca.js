// bind, call and apply

let john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log ('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' +
      this.name +', I\'m a ' +
      this.job + ' and I\'m ' +
      this.age + ' years old.')
    }
      else if (style === 'friendly') {
        console.log('Hey! What\'s up? I\'m ' +
        this.name + ', I\'m a ' +
        this.job + ' and I\'m ' +
        this.age + ' years old. Have a nice ' + timeOfDay + '.')
      }
  }
}

let emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
}

john.presentation('formal', 'morning')

john.presentation.call(emily, 'friendly', 'afternnon')

// the apply method is similar to the call method but it will take the arguments
// as an array instead as arguments.  This will not work now because our functions
// is not expecting an array

// john.presentation.apply(emily, ['friendly', 'afternoon'])

let johnFriendly = john.presentation.bind(john, 'friendly')

johnFriendly('morning')
johnFriendly('night')

let emilyFormal = john.presentation.bind(emily, 'formal')

emilyFormal('afternoon')
