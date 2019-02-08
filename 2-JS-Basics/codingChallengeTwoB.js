/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/

let averageScoreMike, averageScoreJohn, averageScoreMary

averageScoreJohn = (89 + 120 + 103)/ 3

averageScoreMike = (116 + 94 + 123) / 3

console.log('john score ' + averageScoreJohn, 'mike score ' + averageScoreMike);

if (averageScoreJohn > averageScoreMike) {
  console.log('John is the man with the W! With a average score of', averageScoreJohn);
} else if (averageScoreMike > averageScoreJohn) {
  console.log('Mike is the man with the W! With a average score of', averageScoreMike);
} else if (averageScoreMike === averageScoreJohn) {
  console.log('It is a tie');
} else {
  console.log('WTF happened')
}

averageScoreMary = (97 + 134 + 105) / 3
console.log(averageScoreMary);

if (averageScoreJohn > averageScoreMike && verageScoreJohn > averageScoreMary) {
  console.log('John is the man with the W! With a average score of', averageScoreJohn);
} else if (averageScoreMike > averageScoreJohn && averageScoreMike > averageScoreMary) {
  console.log('Mike is the man with the W! With a average score of', averageScoreMike);
} else if (averageScoreMary > averageScoreJohn && averageScoreMary > averageScoreMike) {
  console.log('Mary is a bad mamajamma! With a average score of', averageScoreMary);
} else if (averageScoreMike === averageScoreJohn === averageScoreMary) {
  console.log('It is a tie');
} else {
  console.log('WTF happened')
}
