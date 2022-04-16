//*************Level - 1 ****************/

// 1- Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = `arjin`,
  lastName = `albay`,
  country = `Turkey`,
  city = `Diyarbakir`,
  age = 26,
  isMarried = false,
  year = new Date().getYear();

console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof city,
  typeof age,
  typeof isMarried,
  typeof year
);

// 2- Check if type of '10' is equal to 10

console.log(`10` === 10); //false

// 3- Check if parseInt('9.8') is equal to 10

console.log(console.log(parseInt(`9,8`) == 10));

// 4- Boolean value is either true or false.

// i- Write three JavaScript statement which provide truthy value.

Boolean(4 > 3);
Boolean("arjin");
Boolean(-45);

// ii- Write three JavaScript statement which provide falsy value.

Boolean(0);
Boolean(NaN);
Boolean(undefined);
Boolean(null);
Boolean(``);

// 5-  Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");

let python = "python";
jargon = "jargon";

console.log(!(python.length == jargon.length)); // False

// 6- Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));

// 7-  Use the Date object to do the following activities

let now = new Date();
console.log(now);

// What is the year today?

let theYear = now.getFullYear();

console.log(theYear);

// What is the month today as a number?

let theMonth = now.getMonth();
console.log(theMonth);

// What is the date today?

let theToday = now.getDate();
console.log(theToday);

// What is the day today as a number?

let theToday1 = now.getDay();
console.log(theToday1);

// What is the hours now?

let theHours = now.getHours();
console.log(theHours);

// What is the minutes now?

let theMinustes = now.getMinutes();
console.log(theMinustes);

// Find out the numbers of seconds elapsed from January 1, 1970 to now.

let theSeconds = now.getTime();
console.log(theSeconds);

// ******************* Level 2 ********

// 1- Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let base = prompt(`please enter a base value : `);

let height = prompt(`please enter a height value : `);

let area = base * height * 0.5;

alert(`The area of the triangle is ${area}`);

// 2- Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

let sideA = Number(prompt(`please enter A : `));
let sideB = Number(prompt(`please enter B  : `));
let sideC = Number(prompt(`please enter C : `));

let perimeter = sideA + sideB + sideC;

alert(`The perimeter of the triangle is  ${perimeter}`);

//  3- Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let length = prompt(`please enter length : `);
let width = prompt(`please enter width : `);

let areaRectangle = length * width;

alert(`The area of the rectangle is  ${areaRectangle}`);

//  4- Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let radius = prompt(`please enter radius : `);

let areaCircle = Math.PI * radius ** 2;

alert(`The area of the circle  is  ${areaCircle}`);

let circum = 2 * Math.PI * radius;

alert(`The area of the circumference  is  ${circum}`);

// 9- Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

let hour = prompt(`please enter hour : `);
let perHour = prompt(`please enter perHour : `);

let pay = hour * perHour;

alert(`Your weekly earning is ${pay} `);

// 10 - If the length of your name is greater than 7 say, your name is long else say your name is short.

let myName = `arjin`;

myName.length > 7 ? alert(`theName is long`) : alert(`theName is short`);

// 11 - Compare your first name length and your family name length and you should get this output.

let myFirstName = "arjinn";
let myLastName = "albay";

myFirstName > myLastName
  ? alert(
      `Your first name, ${myFirstName} is longer than your family name, ${myLastName}`
    )
  : alert(
      `Your family name, ${myLastName} is shorter than your name, ${myFirstName}`
    );

// 13 - Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

let nowdate = new Date().getFullYear();

let birth = prompt(`enter a value: `);

let agee = nowdate - birth;

let allow = 18 - agee;

agee > 18
  ? alert(`You are ${agee}. You are old enough to drive`)
  : alert(
      `You are ${agee}. You will be allowed to drive after ${allow}  years. `
    );

//  14 - Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

let yourtBirth = prompt(`year : `);
let now2 = new Date();

let seconds = (now2.getFullYear() - yourtBirth) * (365 * 24 * 60 * 60);

alert(`You lived ${seconds} seconds.`);

// 15-Create a human readable time format using the Date time object

let now3 = new Date();
let years2 = now3.getFullYear();
let month2 = now3.getMonth();
let day2 = now3.getDay();
let hour2 = now3.getHours();
let minute2 = now3.getMinutes();

console.log(`${years2}-${month2}-${day2} ${hour2}:${minute2}

${day2}-${month2}-${years2} ${hour2}:${minute2}

${day2}/${month2}/${years2} ${hour2}:${minute2}

`);
