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

// 1-Iterate 0 to 10 using for loop, do the same using while and do while loop

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

//2- Iterate 10 to 0 using for loop, do the same using while and do while loop

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
//3- Iterate 0 to n using for loop
let i5 = 0;
let n = 10;
while (i5 <= n) {
  console.log(i5);
  i5++;
}

// 4-Write a loop that makes the following pattern using console.log():

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

//5- Use loop to print the following pattern:

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

//6- Using loop print the following pattern

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

//7- Use for loop to iterate from 0 to 100 and print only even numbers

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

// 8--Use for loop to iterate from 0 to 100 and print only odd numbers

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

// 9-Use for loop to iterate from 0 to 100 and print only prime numbers

for (let i = 0; i <= 100; i++) {
  for (let k = 2; k < i; k++) {
    if (i % k === 0 && i > 1) {
      console.log(i);
    }
  }
}
//10- Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sum = 0;

for (let i = 0; i <= 100; i++) {
  sum += i;
}

console.log(sum); // 5050

// 11-Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let even = 0;
let odd = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    even += i;
  } else odd += i;
}

console.log(`evens sum = ${even} and odds sum = ${odd} `);

// 12-Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

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

//13- Develop a small script which generate array of 5 random numbers

let newArr = [];

for (let i = 0; i <= 5; i++) {
  let r = Math.floor(Math.random() * 100);
  newArr.push(r);
}

console.log(newArr);

// 14-Develop a small script which generate array of 5 random numbers and the numbers must be unique

let newArr2 = [];

for (let i = 0; i <= 5; i++) {
  let r = Math.floor(Math.random() * 100);
  if (newArr2.indexOf(r) == -1) newArr2.push(r);
}

console.log(newArr2);

//15- Develop a small script which generate a six characters random id:

let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
let sum1 = "";

for (let i = 0; i <= 6; i++) {
  sum1 += characters.charAt(Math.random() * characters.length);
}

console.log(sum1);

// Exercises: Level 2

//1- Develop a small script which generate any number of characters random id:

let characters1 = "abcdefghijklmnopqrsuvwx123456789";
let r = Math.floor(Math.random() * characters1.length);
let sum2 = "";

for (let i = 0; i <= r; i++) {
  sum2 += characters1.charAt(Math.random() * characters1.length);
}

console.log(sum2);

//2- Write a script which generates a random hexadecimal number. ??

// 3-Write a script which generates a random rgb color number. ??

// 4-Using the above countries array, create the following new array.
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
  newCountries.push(countries1[i].toUpperCase());
}

console.log(newCountries);

//5- Using the above countries array, create an array for countries length'.

// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

let newLength = [];

for (let i = 0; i <= newCountries.length - 1; i++) {
  newLength.push(newCountries[i].length);
}

console.log(newLength);

//6- use the countries array to create the following array of arrays:

/*[
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
] */

let newArr3 = [];

for (let i = 0; i <= countries1.length - 1; i++) {
  newArr3.push([
    countries1[i],
    countries1[i].slice(0, 3).toUpperCase(),
    countries1[i].length,
  ]);
}
console.log(newArr3);

//7- In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

let newArr4 = [];

for (let i = 0; i <= countries1.length - 1; i++) {
  let isThere = countries1[i].includes(`land`);
  if (isThere == true) {
    newArr4.push(countries1[i]);
  } else if (isThere == false) {
    continue;
  } else {
    console.log(`All these countries are without land`);
  }
}
console.log(newArr4);

//8- In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

let newArr5 = [];
let newarr6 = [];

for (let i = 0; i <= countries1.length - 1; i++) {
  let isThere = countries1[i].includes(`ia`);
  if (isThere == true) {
    newArr5.push(countries1[i]);
  } else {
    newarr6.push(countries1[i]);
  }
}

console.log(`countries with "ia" ${newArr5}`);
console.log(`countries without "ia" ${newarr6}`);

// 9- Using the above countries array, find the country containing the biggest number of characters.

// 10-Using the above countries array, find the country containing only 5 characters.

let characters5 = [];

let b = ``;

for (let i = 0; i <= countries1.length - 1; i++) {
  b = countries1[i].length;
  if (b == 5) {
    characters5.push(countries1[i]);
  } else continue;
}

console.log(characters5);

// 11-Find the longest word in the webTechs array

// 12-Use the webTechs1 array to create the following array of arrays:

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

let webTechs1 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let web1 = [];

for (let i = 0; i <= webTechs1.length - 1; i++) {
  web1.push([webTechs1[i], webTechs[i].length]);
}

console.log(web1);

// 14- An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

let mernStack1 = ["MongoDB", "Express", "React", "Node"];

let mern = ``;

for (let i = 0; i <= mernStack1.length - 1; i++) {
  mern += mernStack1[i].slice(0, 1);
}

console.log(mern);

// or
let mer = ``;

for (let mern of mernStack1) {
  mer += mern[0];
}

console.log(mer);

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

let webLan = [];

for (let webs of webTechs1) {
  webLan.push(webs);
}

console.log(webLan);

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

let fruits = ["banana", "orange", "mango", "lemon"];

let newFruit = [];

for (let i = 3; i >= 0; i--) {
  newFruit.push(fruits[i]);
}

console.log(newFruit);

// 15-Print all the elements of array as shown below.

let fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

let firstList = fullStack[0];
let secondList = fullStack[1];

let thirdList = firstList.concat(secondList);

for (let list of thirdList) {
  console.log(list);
}

// ******************* Level 3

let countries2 = [
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

//2- Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

let sortedCountries = countries2.sort();

console.log(sortedCountries);

// 3-Sort the webTechs array and mernStack array

let sortedWebTeachs = webTechs.sort();

console.log(sortedWebTeachs);

let sortedMernStack = mernStack.sort();
console.log(sortedMernStack);

// *******all other questions are the same as above
