/*********************************************************************
VIDEO: LOOPS AND ITERATION
*/
/*
for (let i = 0; i < 10; i++) {
  console.log(i)
}

const names = ['John', 'Jane', 'Mary', 'Mark', 'Bob']

// for loop

for (let i = 0; i < names.length; i++) {
  console.log(names[i])
}

for (let i = names.length - 1; i >= 0; i--) {
  console.log(names[i])
}
*/

//while loop
/**
let i = 0;
while (i < names.length) {
  console.log(names[i])
  i++
}

for (i = 1; i <= 5; i++) {
  console.log(i)

  if (i === 3 ) {
    break
  }
}

for (i = 1; i <= 5; i++) {

  if (i === 3 ) {
    continue
  }
  console.log(i)
}
 */

// going through a array with a for loop
/*
const john = ['John', 'Smith', 1990, 'designer', false]

for (var i = 0; i < john.length; i++) {
 console.log(john[i])
}
*/

// continue and break statements
const john = ['John', 'Smith', 1990, 'designer', false]

for (var i = 0; i < john.length; i++) {
 if (typeof john[i] !== 'string') continue;
  console.log(john[i])
}

for (var i = 0; i < john.length; i++) {
 if (typeof john[i] !== 'string') break;
  console.log(john[i])
}

// looping backwards
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
