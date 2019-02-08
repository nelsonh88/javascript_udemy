///////////////////////////////////////
// Lecture: Hoisting


calculateAge(1967)

function calculateAge(year) {
  console.log(2018-year)
}

const retirement = function (year) {
  console.log(65 - (2018-year))
}

retirement(1992)
















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    // console.log(a + b + c + d);
    // wont work becasue of scope
    // only has access to a and d variables
}
