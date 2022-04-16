// Conditionals

//example

let num = 3;
if (num > 3) {
  console.log(`${num} is a positive number`);
}

// example

let result = prompt(`2+6 kaç yapar `, `2+6`);

if (result == `8`) {
  console.log(`doğru cevap aferin !`);
} else console.log(`yanlış cevap. doğru cevap 8 `);

// example

let a = 5;
if (a > 0) {
  console.log(`${a} is a positive number`);
} else if (a < 0) {
  console.log(`${a} is a negative number`);
} else if (a == 0) {
  console.log(`${a} is zero`);
} else {
  console.log(`${a} is not a number`);
}

// example

let season = prompt(`what is season`);

switch (season) {
  case `summer`:
    console.log(`the weather is very hot`);
    break;

  case `fall`:
    console.log(`leaves are shed`);
    break;

  case `spring`:
    console.log(`flowers bloom`);
    break;

  case `winter`:
    console.log(`the weather is very cold`);
    break;
}

// Switch More Example

let dayInput = prompt(`what day is today?`);
let day = dayInput.toLowerCase();

switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;

  case "tuesday":
    console.log("Today is Tuesday");
    break;

  case "wednesday":
    console.log("Today is Wednesday");
    break;

  case "thursday":
    console.log("Today is Thursday");
    break;

  case "friday":
    console.log("Today is Friday");
    break;

  case "saturday":
    console.log("Today is Saturday");
    break;

  case "sunday":
    console.log("Today is Sunday");
    break;

  default:
    console.log("It is not a week day.");
}

//  Examples to use conditions in the cases

let num2 = prompt(`enter number`);

switch (true) {
  case num2 > 0:
    console.log("Number is positive");
    break;

  case num2 == 0:
    console.log("Numbers is zero");
    break;

  case num2 < 0:
    console.log("Number is negative");
    break;

  default:
    console.log("Entered value was not a number");
}

//************************** Exercises ***************************************

// 1- Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let yourAge = prompt(`enter your age`);

let allow = 18 - yourAge;

if (yourAge >= 18) {
  console.log(`You are old enough to drive.`);
} else console.log(`You are left with ${allow} years to drive. `);

// 2- Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let yourAge2 = prompt(`enter your age: `);

let myAge = 26;

if (yourAge2 > myAge) {
  console.log(`You are ${yourAge2 - myAge} years older than me.`);
} else console.log(`I am ${myAge - yourAge2} years older than you.`);

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

let a2 = 4;
let b2 = 3;

if (a > b) {
  console.log(`${a2}  is greater than ${b2} `);
} else if (a < b) {
  console.log(`${b2}  is greater than ${a2} `);
} else console.log(`${b2} and ${a2} are equal`);

a2 > b2
  ? console.log(`${a2}  is greater than ${b2} `)
  : console.log(`${b2}  is greater than ${a2} `);

// 4- Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let num3 = prompt(`Enter a number`);

num3 % 2 == 0
  ? console.log(`${num3} is an even number`)
  : console.log(`${num3} is an odd number`);

//  *************************  Exercises: Level 2 ****************

// 1- Write a code which can give grades to students according to theirs scores

let score = prompt(`enter your score:`);

switch (true) {
  case score >= 80 && score <= 100:
    console.log("your score A ");
    break;

  case score >= 70 && score <= 79:
    console.log("your score B ");
    break;

  case score >= 60 && score <= 69:
    console.log("your score C ");
    break;

  case score >= 50 && score <= 59:
    console.log("your score D ");
    break;

  case score >= 0 && score <= 49:
    console.log("your score F ");
    break;

  case score < 0 || score > 100:
    console.log("MUST BE BETWEEN 0 AND 100");
    break;

  default:
    console.log("Entered value was not a number");
}

//  2- Check if the season is Autumn, Winter, Spring or Summer. If the user input is

let season2 = prompt(`what is season`);
let seasons = season2.toString().toLowerCase();
switch (seasons) {
  case `summer`:
    console.log(`June, July or August, the season is Summer`);
    break;

  case `fall`:
    console.log(`September, October or November, the season is Autumn`);
    break;

  case `spring`:
    console.log(`March, April or May, the season is Spring`);
    break;

  case `winter`:
    console.log(`December, January or February, the season is Winter.`);
    break;

  default:
    console.log(`its not a season`);
}

// 3- Check if a day is weekend day or a working day. Your script will take day as an input.

let day3 = prompt(`What is the day  today?`);
let days = day3.toLowerCase().toString();

if (days == `saturday` || days == `sunday`) {
  console.log(`${days} is a weekend.`);
} else if (
  days == `monday` ||
  days == `tuesday` ||
  days == `wednesday` ||
  days == `thursday` ||
  days == `friday`
) {
  console.log(`${days} is a working day.`);
} else console.log(`it is not days of the week`);

//************************Level 3 ************** */

// 1- Write a program which tells the number of days in a month.

let jan = `1`;
February = `2`;
March = `3`;
April = `4`;
May = `5`;
June = `6`;
July = `7`;
August = `8`;
September = `9`;
October = `10`;
November = `11`;
December = `12`;

let month = prompt(`Enter a month`);

let monthDay = month.toLowerCase();

if (
  monthDay == `1` ||
  monthDay == `3` ||
  monthDay == `5` ||
  monthDay == `7` ||
  monthDay == `8` ||
  monthDay == `10` ||
  monthDay == `12`
) {
  console.log(`${monthDay} has 31 days.`);
} else if (
  monthDay == `4` ||
  monthDay == `6` ||
  monthDay == `9` ||
  monthDay == `11`
) {
  console.log(`${monthDay} has 30 days.`);
} else if (monthDay == `2`) {
  onsole.log(`${monthDay} Either 28 or 29 Days in this Month.`);
} else console.log(`Please enter Valid Number between 1 to 12`);
