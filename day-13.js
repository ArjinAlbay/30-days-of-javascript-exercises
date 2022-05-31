// ********************* Exercises:Level 1

// 1- Display the countries array as a table

let countries = [
  [`Findland`, `Helsinki`],
  [`Sweeden`, `Stockholm`],
  [`Norway`, `Oslo`],
];

console.table(countries);

// 2- Display the countries object as a table

countries = [
  { country: `Findland`, capital: `Helsinki` },
  { country: `Sweeden`, capital: `Stockholm` },
  { country: `Norway`, capital: `Oslo` },
];

console.table(countries);

//3- Use console.group() to group logs

console.group(`Countries Group`);
console.log(countries);
console.groupEnd();

// ******************** Exercises:Level 2

// 1-  10 > 2 * 10 use console.assert()
let result = 2 * 10;
console.assert(10 > result, `10 is greater than ${result}`); // Assertion failed: 10 is greater than 20

//2-  Write a warning message using console.warn()

console.warn(`its a warning message`);

// 3- Write an error message using console.error()

console.error(`its a error message`);

//********************* Exercises:Level 3

// 1- Check the speed difference among the following loops: while, for, for of, forEach

let i = 0;
console.time(`While timer`);
while (i < countries.length) {
  console.log(countries[i][0], countries[i][1]);
  i++;
}
console.timeEnd(`While timer`); //While timer: 0.51513671875 ms

console.time(`Regular for loop`);
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1]);
}
console.timeEnd(`Regular for loop`); // Regular for loop: 0.468994140625 ms

console.time(`for of loop`);
for (let [country, city] of countries) {
  console.log(country, city);
}
console.timeEnd(`for of loop`); // for of loop: 0.25927734375 ms

console.time("forEach loop");
countries.forEach(([country, city]) => {
  console.log(country, city);
});
console.timeEnd("forEach loop"); // forEach loop: 0.3779296875 ms
