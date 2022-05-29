// ********** Exercises: Level 1

// 1- Calculate the total annual income of the person from the following text.

let text = `He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.`;
let digit = /\d+/g;
let matches = text.match(digit);
let convert = matches.map(Number);
console.log(convert);
let salary = 0;
for (let sum of convert) {
  salary += sum;
}

console.log(salary); // 19500
