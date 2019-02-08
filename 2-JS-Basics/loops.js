for (let i = 0; i < 10; i++) {
  console.log(i)
}

const names = ['John', 'Jane', 'Mary', 'Mark', 'Bob']

// for loops
for (let i = 0; i < names.length; i++) {
  console.log(names[i])
}

for (let i = names.length - 1; i >= 0; i--) {
  console.log(names[i])
}

//while loops

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
