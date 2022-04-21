// Exercises: Level 1

let countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

let webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let mernStack = ["MongoDB", "Express", "React", "Node"];

// Iterate 0 to 10 using for loop, do the same using while and do while loop

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

let ii = 0;

do {
  console.log(ii);
  ii++;
} while (ii <= 10);

// Iterate 10 to 0 using for loop, do the same using while and do while loop

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

let iii = 10;
do {
  console.log(iii);
  iii--;
} while (iii >= 0);

let i4 = 10;
while (i4 >= 0) {
  console.log(i4);
  i4--;
}
// Iterate 0 to n using for loop
let i5 = 0;
let n = 10;
while (i5 <= n) {
  console.log(i5);
  i5++;
}

// Write a loop that makes the following pattern using console.log():

/* #
##
###
####
#####
######
####### */
let n1 = `#`;
for (let i = 0; i <= 10; i++) {
  console.log(n1);
  n1 += `#`;
}

// Use loop to print the following pattern:

/* 0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100 */

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

// Using loop print the following pattern

/* i    i^2   i^3
0    0     0
1    1     1
2    4     8
3    9     27
4    16    64
5    25    125
6    36    216
7    49    343
8    64    512
9    81    729
10   100   1000 */

console.log(`i i^2 i^3`);

for (let i = 0; i <= 10; i++) {
  console.log(`${i ** 1}  ${i ** 2}  ${i ** 3}`);
}

// Use for loop to iterate from 0 to 100 and print only even numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  } else continue;
}
//or
let i6 = 0;
while (i6 <= 100) {
  console.log(i6);
  i6 += 2;
}

// Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 1) {
    console.log(i);
  } else continue;
}

let i7 = 1;
while (i7 <= 99) {
  console.log(i7);
  i7 += 2;
}

// Use for loop to iterate from 0 to 100 and print only prime numbers

for (let i = 0; i <= 100; i++) {
  for (let k = 2; k < i; k++) {
    if (i % k === 0 && i > 1) {
      console.log(i);
    }
  }
}
// Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sum = 0;

for (let i = 0; i <= 100; i++) {
  sum += i;
}

console.log(sum); // 5050

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let even = 0;
let odd = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    even += i;
  } else odd += i;
}

console.log(`evens sum = ${even} and odds sum = ${odd} `);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

let even1 = 0;
let odd1 = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    even1 += i;
  } else odd1 += i;
}

let evenArr = [even1];
let oddArr = [odd1];

console.log(`evens sum = ${evenArr} and odds sum = ${oddArr} `);

// Develop a small script which generate array of 5 random numbers

let newArr = [];

for (let i = 0; i <= 5; i++) {
  let r = Math.floor(Math.random() * 100);
  newArr.push(r);
}

console.log(newArr);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique

let newArr2 = [];

for (let i = 0; i <= 5; i++) {
  let r = Math.floor(Math.random() * 100);
  if (newArr2.indexOf(r) == -1) newArr2.push(r);
}

console.log(newArr2);

// Develop a small script which generate a six characters random id:

let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
let sum1 = "";

for (let i = 0; i <= 6; i++) {
  sum1 += characters.charAt(Math.random() * characters.length);
}

console.log(sum1);

// Exercises: Level 2

// Develop a small script which generate any number of characters random id:

let characters1 = "abcdefghijklmnopqrsuvwx123456789";
let r = Math.floor(Math.random() * characters1.length);
let sum2 = "";

for (let i = 0; i <= r; i++) {
  sum2 += characters1.charAt(Math.random() * characters1.length);
}

console.log(sum2);

// Write a script which generates a random rgb color number. ??

let countries1 = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

let newCountries = [];

for (let i = 0; i <= countries1.length - 1; i++) {
  newCountries += countries1[i];
}

console.log(newCountries);
