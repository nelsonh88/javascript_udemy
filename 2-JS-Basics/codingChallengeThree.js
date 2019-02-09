/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/

// Make an two empty array to store the values
const tip = []
const totalBill = []

// make a function that calculates the tip and totalBill

const calculator = function (bill) {
  if (bill < 50) {
    tipOnly = bill * .2
    tip.push(tipOnly)
    billWithTip = tipOnly + bill
    totalBill.push(billWithTip)
    console.log('the tip only', tipOnly);
    console.log('the tip array', tip);
    console.log('bill including the tip', billWithTip);
    console.log('the totalBill array', totalBill);
  }
  else if (bill >= 50 && bill <=200) {
    tipOnly = bill * .15
    tip.push(tipOnly)
    billWithTip = tipOnly + bill
    totalBill.push(billWithTip)
    console.log('the tip only', tipOnly);
    console.log('the tip array', tip);
    console.log('bill including the tip', billWithTip);
    console.log('the totalBill array', totalBill);
  }
  else {
    tipOnly = bill * .10
    tip.push(tipOnly)
    billWithTip = tipOnly + bill
    totalBill.push(billWithTip)
    console.log('the tip only', tipOnly);
    console.log('the tip array', tip);
    console.log('bill including the tip', billWithTip);
    console.log('the totalBill array', totalBill);
  }
}

calculator(48)
calculator(124)
calculator(268)
console.log(tip, totalBill)
