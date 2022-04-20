// Loops

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

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
